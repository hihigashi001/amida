// shared Componets
import { Colgroup } from "./shared/Colgroup"

export const HideModal = ({ playerCount }) => {
    return (
        <table className="w-full table-fixed">
            <Colgroup />
            <tbody className="w-full">
                {
                    (() => {
                        const thTagCreate = [];
                        for (let i = 0; i < playerCount; i++) {
                            thTagCreate.push(<th className="bg-blue-900 p-4 text-xs" colSpan="2">　</th>)
                        }
                        for (let i = playerCount; i < 10; i++) {
                            thTagCreate.push(<th colSpan="2">　</th>)
                        }
                        return (
                            <tr className="w-full">
                                {
                                    thTagCreate.map((thTag) => {
                                        return thTag;
                                    })
                                }
                            </tr>
                        )
                    })()
                }
            </tbody>
        </table>
    )
}
