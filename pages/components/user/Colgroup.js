export const Colgroup = ({ playerCount }) => {
    return (
      <>
        {
          (() => {
            const Colgroups = [];
            for (let i = 0; i < playerCount * 2; i++) {
              Colgroups.push(<col key={i} style={{width: 10}} />)
            }
            return (
              <colgroup>
                {
                  Colgroups.map((colgroup) => {
                    return colgroup;
                  })
                }
              </colgroup>
            )
          })()
        }
      </>
    )
  }