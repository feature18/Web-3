import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {authApi} from "./authApi";
import {reviewApi} from "./reviewApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer
    },
    middleware: (getDefaultMiddleware ) =>
    getDefaultMiddleware().concat([authApi.middleware, reviewApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch