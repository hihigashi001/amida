import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "src/utility/firebase";

const init = {
    amidakuji: {
        id: "",
        url: "",
        count: "",
        random: "",
        player1: "",
        player2: "",
        player3: "",
        player4: "",
        player5: "",
        player6: "",
        player7: "",
        player8: "",
        player9: "",
        player10: "",
        pried1: "",
        pried2: "",
        pried3: "",
        pried4: "",
        pried5: "",
        pried6: "",
        pried7: "",
        pried8: "",
        pried9: "",
        pried10: "",
    }
}


// あみだページ情報の取得(配列の0番)
// あみだページ情報の取得(URLから)　⇒ほんとはこれやりたい。
export const fetchAmida = createAsyncThunk('amida/getAmida', async () => {
    const res = await db.collection('amidakuji').get()
    const amidas = res.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().URL,
        count: doc.data().count,
        random: doc.data().random,
        player1: doc.data().player1,
        player2: doc.data().player2,
        player3: doc.data().player3,
        player4: doc.data().player4,
        player5: doc.data().player5,
        player6: doc.data().player6,
        player7: doc.data().player7,
        player8: doc.data().player8,
        player9: doc.data().player9,
        player10: doc.data().player10,
        pried1: doc.data().pried1,
        pried2: doc.data().pried2,
        pried3: doc.data().pried3,
        pried4: doc.data().pried4,
        pried5: doc.data().pried5,
        pried6: doc.data().pried6,
        pried7: doc.data().pried7,
        pried8: doc.data().pried8,
        pried9: doc.data().pried9,
        pried10: doc.data().pried10,
    })
    )
    return amidas[0]
})

// Player編集
export const editPlayer = async ({ submitData }) => {
    const { id, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10 } = submitData;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player1, player2, player3, player4, player5, player6, player7, player8, player9, player10 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};

// あみだ新規作成


const amidaSlice = createSlice({
    name: "amida",
    initialState: init,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAmida.fulfilled, (state, action) => {
            state.amidakuji = action.payload;
        })
        builder.addCase(fetchAmida.rejected, (state, action) => {
            console.log("データ取得に失敗しました。")
        })
    }
});

const { actions, reducer } = amidaSlice;

export const selectAmidakuji = (state) => state.amida.amidakuji;

export default reducer;
