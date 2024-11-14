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

export const fetchLogin = createAsyncThunk(
    "user/login",
    async (user: { username: string; password: string }, thunkApi) => {
        try {
            const res = await fetch("http://localhost:1414/api/auth/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (res.status !== 200) {
                return thunkApi.rejectWithValue(
                    "Can't login, please try again"
                );
            }
            const data = await res.json();
            // thunkApi.fulfillWithValue(data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(
                `Can't login, please try again ${err}`
            );
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { },
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = DataStatus.LOADING;
                state.error = null;
                state.user = null;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = DataStatus.SUCCESS;
                state.error = null;
                state.user = action.payload as unknown as IUser;
                localStorage.setItem("user", JSON.stringify(state.user));                
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = DataStatus.FAILED;
                state.error = action.error as string;
                state.user = null;
            });
    },
});

export default userSlice;
