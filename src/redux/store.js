import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import amidaReducer from "src/redux/amidaSlice";
import contactReducer from "src/redux/contactSlice";

export default configureStore({
    reducer: {
        amida: amidaReducer,
        contact: contactReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
