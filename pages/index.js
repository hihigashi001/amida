import { useState } from "react"
import cc from "classcat";

export default function Home() {
  const [count, setCount] = useState(10)
  const onClickOneAdd = () => {
    setCount(() => count + 1)
    console.log(count)
  }
  const onClickOneSub = () => {
    setCount(() => count - 1)
  }
  const Colgroup = () => {
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

  const PlayerHead = ({ playerCount }) => {
    return (
      <table className="w-full table-fixed">
        <Colgroup />
        <tbody className="w-full">
          {
            (() => {
              const thTagCreate = [];
              for (let i = 0; i < playerCount; i++) {
                thTagCreate.push(<th className="border border-gray-700 p-4 text-xs" colSpan="2">PlayerName1111111111111111</th>)
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

  return (
    <div>
      <div>
        <h1 className="text-xl">あみだくじ</h1>
      </div>
      <div>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={onClickOneAdd}>+1</button>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={onClickOneSub}>-1</button>
      </div>
      <div className="p-8">
        <PlayerHead playerCount={count} />
        <table className="w-full">
          <Colgroup />
          <tbody className="w-full">
            <tr className="w-full">
              <th>6</th>
              <th colSpan="2">1</th>
              <th colSpan="2">2</th>
              <th colSpan="2">1</th>
              <th colSpan="2">2</th>
              <th colSpan="2">2</th>
              <th colSpan="2">1</th>
              <th colSpan="2">2</th>
              <th colSpan="2">1</th>
              <th colSpan="2">2</th>
              <th>6</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
