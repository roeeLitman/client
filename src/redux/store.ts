import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import userSlice from "./slise/userSlice";
import organizationSlice from "./slise/organizationSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        organization:organizationSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
