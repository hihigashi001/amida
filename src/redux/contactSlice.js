import { createSlice } from "@reduxjs/toolkit";

const init = {
    formData: {
        name: "",
        mail: "",
        contents: "",
    }
}

const contactSlice = createSlice({
    name: "contact",
    initialState: init,
    reducers: {
        setDatas(state, action) {
            return {
                ...state,
                formData: action.payload
              };
            },
    },
    extraReducers: {},
});

const { actions, reducer } = contactSlice;

export const { setDatas } = actions

export const selectFormData = (state) => state.contact.formData;

export default reducer;
