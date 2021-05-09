// liblary
import { useState } from "react"
// Componets
import { PlayerHead } from "src/components/user/PlayerHead"
import { PriedFooder } from "src/components/user/PriedFooder"
import { BoderCount } from "src/components/user/BoderCount"
import { HideModal } from "src/components/user/HideModal"
import { HideModalSpace } from "src/components/user/HideModalSpace"
// function
import { Random10 } from "src/utility/function"

export const template = () => {
    const [opacity ,setOpacity] = useState(true)
    const count = 4
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
    console.log(Random10())
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
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
                            <BoderCount playerCount={count} />
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