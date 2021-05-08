import { Button } from "../shared/Button"

export const PlayerHead = ({ playerCount }) => {
    return (
        <table className="w-full table-fixed">
            <tbody className="w-full">
                {
                    (() => {
                        const thTagCreate = [];
                        for (let i = 0; i < playerCount; i++) {
                            thTagCreate.push(<th key={i} colSpan="2">
                                <Button>選択する</Button>
                                </th>)
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
