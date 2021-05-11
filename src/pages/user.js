// liblary
import { useState, useMemo } from "react"
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
// function
import { Random10 } from "src/utility/function"

export const user = () => {
    const [opacity, setOpacity] = useState(false)
    const count = 6
    const pried1 = "◎当たり"
    const pried2 = "✕"
    const pried3 = "◎当たり"
    const pried4 = "✕"
    const pried5 = "✕"
    const pried6 = "✕"
    const pried7 = "✕"
    const pried8 = "✕"
    const pried9 = "✕"
    const pried10 = "✕"
    const random = useMemo(() => Random10(), [])
    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const [player3, setPlayer3] = useState("")
    const [player4, setPlayer4] = useState("")
    const [player5, setPlayer5] = useState("")
    const [player6, setPlayer6] = useState("")
    const [player7, setPlayer7] = useState("")
    const [player8, setPlayer8] = useState("")
    const [player9, setPlayer9] = useState("")
    const [player10, setPlayer10] = useState("")
    return (
        <div>
            <div>
                <h1 className="text-xl text-gray-700">あみだくじユーザページ</h1>
                <Button onClick={() => setOpacity(!opacity)}>表示切替ボタン</Button>
            </div>
            <div className="p-12">
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
                    setPlayer1={setPlayer1}
                    setPlayer2={setPlayer2}
                    setPlayer3={setPlayer3}
                    setPlayer4={setPlayer4}
                    setPlayer5={setPlayer5}
                    setPlayer6={setPlayer6}
                    setPlayer7={setPlayer7}
                    setPlayer8={setPlayer8}
                    setPlayer9={setPlayer9}
                    setPlayer10={setPlayer10}
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
            </div>
        </div>
    )
}


export default user;