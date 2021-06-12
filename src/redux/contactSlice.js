import { createSlice } from "@reduxjs/toolkit";
import { db, dataNow } from "src/utility/firebase";

const init = {
    formData: {
        name: "",
        mail: "",
        contents: "",
    }
}

export const createFirestore = async (props) => {
    const { name, mail, contents } = props;
    const createAt = dataNow()
    console.log("load")
    try {
        await db
            .collection('mail')
            .add({ name: name, mail: mail, contents: contents, createAt: createAt });
        console.log("成功")
    } catch {
        console.log("失敗")
    }
};


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
