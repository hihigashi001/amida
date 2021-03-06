import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, dataNow } from "src/utility/firebase";
import { shuffle } from "src/utility/function"

const init = {
    amidakuji: {
        id: "",
        title: "",
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
// url一覧取得
export const getAllPostIds = async () => {
    const res = await db.collection('amidakuji').get()

    return res.docs.map((doc) => {
        if (typeof (doc.data().url) !== "undefined") {
            return { params: { id: doc.data().url }, }
        } else {
            return { params: { id: "xxxxx" }, }
        }
    })
}

// あみだページ情報の取得(URLから)
export const fetchAmidaUrl2 = async (getURL) => {
    if (getURL !== "xxxxx") {
        const res = await db.collection('amidakuji').where("url", "==", getURL).get()
        const amida = res.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            url: doc.data().url,
            count: Number(doc.data().count),
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
        return amida[0]
    } else {
        const amida = {
            id: "xxxxx",
            title: "",
            url: "xxxxx",
            count: 2,
            random: "12345678901234567890",
            player1: "1",
            player2: "2",
            player3: "3",
            player4: "4",
            player5: "5",
            player6: "6",
            player7: "7",
            player8: "8",
            player9: "9",
            player10: "1",
            pried1: "pried1",
            pried2: "pried2",
            pried3: "pried3",
            pried4: "pried4",
            pried5: "pried5",
            pried6: "pried6",
            pried7: "pried7",
            pried8: "pried8",
            pried9: "pried9",
            pried10: "pried1",
        }
        console.log("test2")
        console.log(amida)
        return amida
    }
}

// あみだページ情報の取得(URLから)
export const fetchAmidaUrl = createAsyncThunk('amida/getAmida', async (getURL) => {
    const res = await db.collection('amidakuji').where("url", "==", getURL).get()
    const amida = res.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        url: doc.data().url,
        count: Number(doc.data().count),
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
    return amida[0]
})

// Player編集
export const putPlayer1 = async (props) => {
    const { id, player1 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player1 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer2 = async (props) => {
    const { id, player2 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player2 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer3 = async (props) => {
    const { id, player3 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player3 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer4 = async (props) => {
    const { id, player4 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player4 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer5 = async (props) => {
    const { id, player5 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player5 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer6 = async (props) => {
    const { id, player6 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player6 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer7 = async (props) => {
    const { id, player7 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player7 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer8 = async (props) => {
    const { id, player8 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player8 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer9 = async (props) => {
    const { id, player9 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player9 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};
export const putPlayer10 = async (props) => {
    const { id, player10 } = props;
    try {
        await db
            .collection('amidakuji')
            .doc(id)
            .set({ player10 }, { merge: true });
    } catch (err) {
        console.log('Error updating document:', err);
    }
};

// あみだ新規作成
export const amidaCreate = async (props) => {
    const { title, url, count, random, priedProps1, priedProps2, priedProps3, priedProps4, priedProps5, priedProps6, priedProps7, priedProps8, priedProps9, priedProps10 } = props;
    const player1 = ""
    const player2 = ""
    const player3 = ""
    const player4 = ""
    const player5 = ""
    const player6 = ""
    const player7 = ""
    const player8 = ""
    const player9 = ""
    const player10 = ""
    const createAt = dataNow()
    const sendArray = [priedProps1, priedProps2, priedProps3, priedProps4, priedProps5, priedProps6, priedProps7, priedProps8, priedProps9, priedProps10]
    const newArray = []
    for (let i = 0; i < count; i++) {
        newArray.push(sendArray[i])
    }
    const arrayShuffle = shuffle(newArray)
    const pried1 = arrayShuffle[0]
    const pried2 = arrayShuffle[1]
    const pried3 = arrayShuffle[2]
    const pried4 = arrayShuffle[3]
    const pried5 = arrayShuffle[4]
    const pried6 = arrayShuffle[5]
    const pried7 = arrayShuffle[6]
    const pried8 = arrayShuffle[7]
    const pried9 = arrayShuffle[8]
    const pried10 = arrayShuffle[9]
    try {
        await db
            .collection('amidakuji')
            .add({ title, url, count, random, pried1, pried2, pried3, pried4, pried5, pried6, pried7, pried8, pried9, pried10, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, createAt });
    } catch (err) {
        console.log('Error add document:', err);
    }
};

const amidaSlice = createSlice({
    name: "amida",
    initialState: init,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAmidaUrl.fulfilled, (state, action) => {
            state.amidakuji = action.payload;
        }),
            builder.addCase(fetchAmidaUrl.rejected, (state, action) => {
                console.log("データ取得に失敗しました。")
            })
    }
});

const { actions, reducer } = amidaSlice;

export const selectAmidakuji = (state) => state.amida.amidakuji;

export default reducer;
