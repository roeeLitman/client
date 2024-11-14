import { createAsyncThunk } from "@reduxjs/toolkit";


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
