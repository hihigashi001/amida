export const PlayerHead = (props) => {
    return (
      <table className="w-full table-fixed">
        <tbody className="w-full">
          {
            (() => {
              const thTagCreate = [];
              for (let i = 0; i < props.playerCount; i++) {
                thTagCreate.push(<th key={i} className="border border-gray-700 p-4 text-xs text-gray-700" colSpan="2">参加者 {i+1}</th>)
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
