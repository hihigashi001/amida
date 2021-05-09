// shared Componets
import { Colgroup } from "src/components/shared/Colgroup"

export const HideModal = ({ playerCount }) => {
    return (
        <table className="w-full table-fixed border-collapse border-spacing-0 bg-blue-900">
            <Colgroup />
            <tbody className="w-full">
                {
                    (() => {
                        const thTagCreate = [];
                        for (let i = 0; i < playerCount; i++) {
                            thTagCreate.push(<th key={i} className="bg-blue-900 p-4 text-xs" colSpan="2">　</th>)
                        }
                        for (let i = playerCount; i < 10; i++) {
                            thTagCreate.push(<th key={i} colSpan="2">　</th>)
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
