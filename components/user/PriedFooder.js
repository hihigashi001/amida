export const PriedFooder = (props) => {
    const valueChange = (i) => {
        if (i == 0) {
            return props.pried1
        } else if (i == 1) {
            return props.pried2
        } else if (i == 2) {
            return props.pried3
        } else if (i == 3) {
            return props.pried4
        } else if (i == 4) {
            return props.pried5
        } else if (i == 5) {
            return props.pried6
        } else if (i == 6) {
            return props.pried7
        } else if (i == 7) {
            return props.pried8
        } else if (i == 8) {
            return props.pried9
        } else {
            return props.pried10
        }
    }

    return (
        <table className="w-full table-fixed">
            <tbody className="w-full">
                {
                    (() => {
                        const thTagCreate = [];
                        for (let i = 0; i < props.playerCount; i++) {
                            thTagCreate.push(
                                <th key={i} className="px-2" colSpan="2">
                                    <p
                                        className="text-gray-700 text-lg"
                                        name={"Player" + String(i + 1)}
                                    >{valueChange(i)}</p>
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
