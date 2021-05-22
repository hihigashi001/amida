import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const init = {
    formData: {
        name: "",
        mail: "",
        contents: "",
    }
}

export const putGoogleForm = async (props) => {
    const submitParams = new FormData()
    submitParams.append("entry.2092238618", props.name);
    submitParams.append("entry.1556369182", props.mail);
    submitParams.append("entry.479301265", props.contents);
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdbqfraWV8FYeFzbVf59KJFxtuuo9CnuBUkULJWJQQK9smcfA/formResponse'
    const res = await axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
    return res;
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
