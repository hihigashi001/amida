import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import amidaReducer from "src/redux/amidaSlice";

export default configureStore({
    reducer: {
        amida: amidaReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
