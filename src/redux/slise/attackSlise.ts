import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStatus } from "../../types/redux";


const initialState = {
    error: null,
    status: DataStatus.IDLE,
    data: null,
};



export const fetchGetAllAttack = createAsyncThunk(
    "user/allattack",
    async (_, thunkApi) => {
        try {
            const token = JSON.parse(localStorage.getItem("user") || "").token;
            const res = await fetch("http://localhost:1414/api/attack/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            if (res.status != 200) {
                return thunkApi.rejectWithValue(
                    "Can't create new user, please try again"
                );
            }
            const data = await res.json();
            return thunkApi.fulfillWithValue(data);
        } catch (err) {
            console.log(err);
            return thunkApi.rejectWithValue(
                "Can't create new user, please try again"
            );
        }
    }
);

const attackSlice = createSlice({
    name: "attack",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchGetAllAttack.pending, (state) => {
                state.status = DataStatus.LOADING;
                state.error = null;
                state.data = null;
            })
            .addCase(fetchGetAllAttack.fulfilled, (state, action) => {
                state.status = DataStatus.SUCCESS;
                state.error = null;
                state.data = action.payload 
            })
            .addCase(fetchGetAllAttack.rejected, (state, action) => {
                state.status = DataStatus.FAILED;
                state.error = action.error as string;
                state.data = null;
            });
    },
});

export default attackSlice;
