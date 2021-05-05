export const BoderCount = ({ playerCount }) => {
    const playerCounts = playerCount - 2
    return (
        <tr className="w-full">
            <th colSpan="1"></th>
            <th className="border-l border-r border-gray-700 h-8" colSpan="2"></th>
            {
                (() => {
                    const thTagCreate = [];
                    for (let i = 0; i < playerCounts; i++) {
                        thTagCreate.push(<th className="border-r border-gray-700 h-8" colSpan="2"></th>)
                    }
                    for (let i = playerCounts; i < 8; i++) {
                        thTagCreate.push(<th colSpan="2"></th>)
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