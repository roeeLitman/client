import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux";
import { IUser } from "../../types/IUser";

const initialState: userState = {
    error: null,
    status: DataStatus.IDLE,
    user: null,
};

export const fetchDetails = createAsyncThunk(
    "organization",
    async (
        _,
        thunkApi
    ) => {
        try {
            const token = JSON.parse(localStorage.getItem("user") || "").token

            const res = await fetch("http://localhost:1414/api/user", {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
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

const organizationSlice = createSlice({
    name: "organization",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchDetails.pending, (state) => {
                state.status = DataStatus.LOADING;
                state.error = null;
                state.user = null;
            })
            .addCase(fetchDetails.fulfilled, (state, action) => {
                state.status = DataStatus.SUCCESS;
                state.error = null;
                state.user = action.payload as unknown as IUser;
            })
            .addCase(fetchDetails.rejected, (state, action) => {
                state.status = DataStatus.FAILED;
                state.error = action.error as string;
                state.user = null;
            });
    },
});

export default organizationSlice;
