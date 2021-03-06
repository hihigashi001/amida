import cc from "classcat";

export const BoderCount7 = ({ playerCount, random }) => {
    const className0 = cc([
        "border-l-4 border-r-4 border-gray-700 h-8",
        {
            "border-b-4": random.charAt(27) === "1",
        },
    ]);
    const className1 = cc([
        "border-l-4 border-r-4 border-gray-700 h-8",
        {
            "border-b-4": random.charAt(28) === "1",
        },
    ]);
    const className2 = cc([
        "border-l-4 border-r-4 border-gray-700 h-8",
        {
            "border-b-4": random.charAt(29) === "1",
        },
    ]);
    const className3 = cc([
        "border-l-4 border-r-4 border-gray-700 h-8",
        {
            "border-b-4": random.charAt(30) === "1",
        },
    ]);
    const className4 = cc([
        "border-l-4 border-r-4 border-gray-700 h-8",
        {
            "border-b-4": random.charAt(31) === "1",
        },
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
                        if (i % 2 == 0){
                            thTagCreate.push(<th key={i} className="border-r-4 border-gray-700 h-8" colSpan="2"></th>)
                        } else if (i == 1) {
                            thTagCreate.push(<th key={i} className={className1} colSpan="2"></th>)
                        } else if (i == 3) {
                            thTagCreate.push(<th key={i} className={className2} colSpan="2"></th>)
                        } else if (i == 5) {
                            thTagCreate.push(<th key={i} className={className3} colSpan="2"></th>)
                        } else if (i == 7) {
                            thTagCreate.push(<th key={i} className={className4} colSpan="2"></th>)
                        }
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