export const Colgroup = () => {
    return (
      <>
        {
          (() => {
            const Colgroups = [];
            for (let i = 0; i < 20; i++) {
              Colgroups.push(<col key={i} width="5%" />)
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