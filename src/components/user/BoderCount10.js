import cc from "classcat";

export const BoderCount10 = ({ playerCount, random }) => {
    const className0 = cc([
        "border-l-4 border-r-4 border-gray-700 h-8",
    ]);
    const playerCounts = playerCount - 2
    return (
        <tr className="w-full">
            <th colSpan="1"></th>
            <th className={className0} colSpan="2"></th>
            {
                (() => {
                    const thTagCreate = [];
                    for (let i = 0; i < playerCounts; i++) {
                            thTagCreate.push(<th key={i} className="border-r-4 border-gray-700 h-8" colSpan="2"></th>)
                    }
                    return (
                        <>
                            {
                                thTagCreate.map((thTag) => {
                                    return thTag;
                                })
                            }
                        </>
                    )
                })()
            }
            <th colSpan="1"></th>
        </tr>
    )
}