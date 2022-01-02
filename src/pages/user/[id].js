// liblary
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

// Componets
import { PlayerHead } from "src/components/user/PlayerHead"
import { PriedFooder } from "src/components/user/PriedFooder"
import { HideModal } from "src/components/user/HideModal"
import { HideModalSpace } from "src/components/user/HideModalSpace"
import { BoderCount1 } from "src/components/user/BoderCount/BoderCount1"
import { BoderCount2 } from "src/components/user/BoderCount/BoderCount2"
import { BoderCount3 } from "src/components/user/BoderCount/BoderCount3"
import { BoderCount4 } from "src/components/user/BoderCount/BoderCount4"
import { BoderCount5 } from "src/components/user/BoderCount/BoderCount5"
import { BoderCount6 } from "src/components/user/BoderCount/BoderCount6"
import { BoderCount7 } from "src/components/user/BoderCount/BoderCount7"
import { BoderCount8 } from "src/components/user/BoderCount/BoderCount8"
import { BoderCount9 } from "src/components/user/BoderCount/BoderCount9"
import { BoderCount10 } from "src/components/user/BoderCount/BoderCount10"
import { Button } from "src/components/shared/Button"
// redux
import {
    fetchAmidaUrl,
    fetchAmidaUrl2,
    selectAmidakuji,
    getAllPostIds,
    putPlayer1,
    putPlayer2,
    putPlayer3,
    putPlayer4,
    putPlayer5,
    putPlayer6,
    putPlayer7,
    putPlayer8,
    putPlayer9,
    putPlayer10,
} from "src/redux/amidaSlice"
import { useDispatch } from 'react-redux'
import { db } from "src/utility/firebase"


// layout
import { UserLayout } from "src/layouts/UserLayout"

export const user = ({ params }) => {
    const amidaData = useSelector(selectAmidakuji);
    const dispatch = useDispatch();
    const [opacity, setOpacity] = useState(false)
    const id = amidaData.id
    const title = amidaData.title
    const count = amidaData.count
    const pried1 = amidaData.pried1
    const pried2 = amidaData.pried2
    const pried3 = amidaData.pried3
    const pried4 = amidaData.pried4
    const pried5 = amidaData.pried5
    const pried6 = amidaData.pried6
    const pried7 = amidaData.pried7
    const pried8 = amidaData.pried8
    const pried9 = amidaData.pried9
    const pried10 = amidaData.pried10
    const random = amidaData.random
    const player1 = amidaData.player1
    const player2 = amidaData.player2
    const player3 = amidaData.player3
    const player4 = amidaData.player4
    const player5 = amidaData.player5
    const player6 = amidaData.player6
    const player7 = amidaData.player7
    const player8 = amidaData.player8
    const player9 = amidaData.player9
    const player10 = amidaData.player10
    const opacityChange = () => {
        if (count == 1 && player1 !== "") { setOpacity(true) }
        if (count == 2 && player1 !== "" && player2 !== "") { setOpacity(true) }
        if (count == 3 && player1 !== "" && player2 !== "" && player3 !== "") { setOpacity(true) }
        if (count == 4 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "") { setOpacity(true) }
        if (count == 5 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "" && player5 !== "") { setOpacity(true) }
        if (count == 6 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "" && player5 !== "" && player6 !== "") { setOpacity(true) }
        if (count == 7 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "" && player5 !== "" && player6 !== "" && player7 !== "") { setOpacity(true) }
        if (count == 8 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "" && player5 !== "" && player6 !== "" && player7 !== "" && player8 !== "") { setOpacity(true) }
        if (count == 9 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "" && player5 !== "" && player6 !== "" && player7 !== "" && player8 !== "" && player9 !== "") { setOpacity(true) }
        if (count == 10 && player1 !== "" && player2 !== "" && player3 !== "" && player4 !== "" && player5 !== "" && player6 !== "" && player7 !== "" && player8 !== "" && player9 !== "" && player10 !== "") { setOpacity(true) }
    }

    const router = useRouter();
    const pageId = router.query.id;

    useEffect(() => {
        const getData = () => {
            dispatch(fetchAmidaUrl(pageId));
        };
        if (router.asPath !== router.route) {
            getData();
        }
    }, [router])

    useEffect(() => {
        if (id) {
            db.collection("amidakuji").doc(id).onSnapshot(() => {
                dispatch(fetchAmidaUrl(pageId))
                setOpacity(false)
                opacityChange()
            }
            )
        };
    }, [id]);

    useEffect(() => {
        if (id) {
            opacityChange()
        };
    }, [router, id, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10])

    const handleOnClick = () => {
        const sendData1 = { ...amidaData, player1: "-" }
        const sendData2 = { ...amidaData, player2: "-" }
        const sendData3 = { ...amidaData, player3: "-" }
        const sendData4 = { ...amidaData, player4: "-" }
        const sendData5 = { ...amidaData, player5: "-" }
        const sendData6 = { ...amidaData, player6: "-" }
        const sendData7 = { ...amidaData, player7: "-" }
        const sendData8 = { ...amidaData, player8: "-" }
        const sendData9 = { ...amidaData, player9: "-" }
        const sendData10 = { ...amidaData, player10: "-" }
        if (player1 === "") { putPlayer1(sendData1) }
        if (player2 === "") { putPlayer2(sendData2) }
        if (player3 === "") { putPlayer3(sendData3) }
        if (player4 === "") { putPlayer4(sendData4) }
        if (player5 === "") { putPlayer5(sendData5) }
        if (player6 === "") { putPlayer6(sendData6) }
        if (player7 === "") { putPlayer7(sendData7) }
        if (player8 === "") { putPlayer8(sendData8) }
        if (player9 === "") { putPlayer9(sendData9) }
        if (player10 === "") { putPlayer10(sendData10) }
    }

    const Component = () => {
        return (
            <div className="mb-16">
                <div>
                    <h2 className="text-xl text-gray-700">{title}</h2>
                </div>
                <div className="my-4 flex justify-center">
                    <h2 className="text-gray-700">{count} 名が選択したらアミダが見れるよ</h2>
                </div>
                <div className="p-2">
                    <PlayerHead
                        playerCount={count}
                        player1={player1}
                        player2={player2}
                        player3={player3}
                        player4={player4}
                        player5={player5}
                        player6={player6}
                        player7={player7}
                        player8={player8}
                        player9={player9}
                        player10={player10}
                    />
                    <div className="relative">
                        <table className="w-full table-fixed my-4 absolute">
                            <tbody className="w-full">
                                <BoderCount1 playerCount={count} random={random} />
                                <BoderCount2 playerCount={count} random={random} />
                                <BoderCount3 playerCount={count} random={random} />
                                <BoderCount4 playerCount={count} random={random} />
                                <BoderCount5 playerCount={count} random={random} />
                                <BoderCount6 playerCount={count} random={random} />
                                <BoderCount7 playerCount={count} random={random} />
                                <BoderCount8 playerCount={count} random={random} />
                                <BoderCount9 playerCount={count} random={random} />
                                <BoderCount10 playerCount={count} random={random} />
                            </tbody>
                        </table>
                    </div>
                    <div className="relative">
                        <HideModalSpace playerCount={count} />
                        <HideModal playerCount={count} opacity={opacity} />
                        <HideModal playerCount={count} opacity={opacity} />
                        <HideModal playerCount={count} opacity={opacity} />
                        <HideModal playerCount={count} opacity={opacity} />
                        <HideModal playerCount={count} opacity={opacity} />
                        <HideModal playerCount={count} opacity={opacity} />
                        <HideModalSpace playerCount={count} />
                    </div>
                    <PriedFooder
                        playerCount={count}
                        pried1={pried1}
                        pried2={pried2}
                        pried3={pried3}
                        pried4={pried4}
                        pried5={pried5}
                        pried6={pried6}
                        pried7={pried7}
                        pried8={pried8}
                        pried9={pried9}
                        pried10={pried10}
                    />
                    <div className="my-4 flex justify-center">
                        <h2 className="text-gray-700 block ">残りの選択ボタンをすべて自動入力</h2>
                    </div>
                    <div className="my-4 flex justify-center">
                        <Button className="p-4" onClick={handleOnClick}>残りを全て選択する</Button>
                    </div>
                </div>
            </div>
        )
    }

    if (router.isFallback) {
        return (
            <UserLayout>
                <div>Loading...</div>
            </UserLayout>
        )
    }

    return (
        <UserLayout>
            {
                (id) ? <Component /> : <div>…</div>
            }
        </UserLayout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const postData = await fetchAmidaUrl2(params.id)
    return {
        props: {
            postData: postData
        }
    }
}

export default user;