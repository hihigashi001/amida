// liblary
import { useState } from "react"
// Componets
import { PlayerHead } from "src/components/user/PlayerHead"
import { PriedFooder } from "src/components/user/PriedFooder"
import { HideModal } from "src/components/user/HideModal"
import { HideModalSpace } from "src/components/user/HideModalSpace"
import { BoderCount1 } from "src/components/user/BoderCount1"
import { BoderCount2 } from "src/components/user/BoderCount2"
import { BoderCount3 } from "src/components/user/BoderCount3"
import { BoderCount4 } from "src/components/user/BoderCount4"
import { BoderCount5 } from "src/components/user/BoderCount5"
import { BoderCount6 } from "src/components/user/BoderCount6"
import { BoderCount7 } from "src/components/user/BoderCount7"
import { BoderCount8 } from "src/components/user/BoderCount8"
import { BoderCount9 } from "src/components/user/BoderCount9"
import { BoderCount10 } from "src/components/user/BoderCount10"
// function
import { Random10 } from "src/utility/function"

export const template = () => {
    const [opacity ,setOpacity] = useState(false)
    const count = 5
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
    const random = Random10()
    return (
        <div>
            <div>
                <h1 className="text-xl text-gray-700">あみだくじユーザページ</h1>
            </div>
            <div className="p-12">
                <PlayerHead playerCount={count} />
                <div className="relative">
                    <table className="w-full table-fixed my-4 absolute">
                        <tbody className="w-full">
                            <BoderCount1 playerCount={count} random={random}/>
                            <BoderCount2 playerCount={count} random={random}/>
                            <BoderCount3 playerCount={count} random={random}/>
                            <BoderCount4 playerCount={count} random={random}/>
                            <BoderCount5 playerCount={count} random={random}/>
                            <BoderCount6 playerCount={count} random={random}/>
                            <BoderCount7 playerCount={count} random={random}/>
                            <BoderCount8 playerCount={count} random={random}/>
                            <BoderCount9 playerCount={count} random={random}/>
                            <BoderCount10 playerCount={count} random={random}/>
                        </tbody>
                    </table>
                </div>
                <div className="relative">
                    <HideModalSpace playerCount={count} />
                    <HideModal playerCount={count} opacity={opacity}/>
                    <HideModal playerCount={count} opacity={opacity}/>
                    <HideModal playerCount={count} opacity={opacity}/>
                    <HideModal playerCount={count} opacity={opacity}/>
                    <HideModal playerCount={count} opacity={opacity}/>
                    <HideModal playerCount={count} opacity={opacity}/>
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


export default template;