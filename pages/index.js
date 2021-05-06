// liblary
import { useState } from "react"

// shared Componets
import { Button } from "./components/shared/Button"
import { Colgroup } from "./components/shared/Colgroup"

// Componets
import { PlayerHead } from "./components/admin/PlayerHead"
import { PriedFooder } from "./components/admin/PriedFooder"
import { BoderCount } from "./components/admin/BoderCount"
import { HideModal } from "./components/admin/HideModal"
import { HideModalSpace } from "./components/admin/HideModalSpace"

const Home = () => {
  const [count, setCount] = useState(10)
  const [pried1, setPried1] = useState("◎当たり")
  const [pried2, setPried2] = useState("✕")
  const [pried3, setPried3] = useState("✕")
  const [pried4, setPried4] = useState("✕")
  const [pried5, setPried5] = useState("✕")
  const [pried6, setPried6] = useState("✕")
  const [pried7, setPried7] = useState("✕")
  const [pried8, setPried8] = useState("✕")
  const [pried9, setPried9] = useState("✕")
  const [pried10, setPried10] = useState("✕")

  const onClickOneAdd = () => {
    if (count < 10) {
      setCount(() => count + 1)
    }
  }
  const onClickOneSub = () => {
    if (count > 2) {
      setCount(() => count - 1)
    }
  }

  const onClickCreate = () => {
    console.log(count)
  }

  return (
    <div>
      <div>
        <h1 className="text-xl text-gray-700">あみだくじ</h1>
      </div>
      <div>
        <Button className="mx-2" onClick={onClickOneAdd}>+1</Button>
        <p className="inline font-bold text-2xl mx-2 text-gray-700">{count} 本</p>
        <Button className="mx-2" onClick={onClickOneSub}>-1</Button>
        <Button className="mx-2" onClick={onClickCreate}>あみだくじを作成する</Button>
      </div>
      <div className="p-8">
        <PlayerHead playerCount={count} />
        <div className="relative">
          <table className="w-full table-fixed my-4 absolute">
            <Colgroup />
            <tbody className="w-full">
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
              <BoderCount playerCount={count} />
            </tbody>
          </table>
        </div>
        <div className="relative">
          <HideModalSpace playerCount={count} />
          <HideModal playerCount={count} />
          <HideModal playerCount={count} />
          <HideModal playerCount={count} />
          <HideModal playerCount={count} />
          <HideModal playerCount={count} />
          <HideModal playerCount={count} />
          <HideModalSpace playerCount={count} />
        </div>
        <PriedFooder
          playerCount={count}
          pried1={pried1}
          pried2={pried2}
          pried3={pried3}
          pried4={pried4}
          pried5={pried5}
          pried6={pried6}
          pried7={pried7}
          pried8={pried8}
          pried9={pried9}
          pried10={pried10}
          setPried1={setPried1}
          setPried2={setPried2}
          setPried3={setPried3}
          setPried4={setPried4}
          setPried5={setPried5}
          setPried6={setPried6}
          setPried7={setPried7}
          setPried8={setPried8}
          setPried9={setPried9}
          setPried10={setPried10}
        />
      </div>
    </div>
  )
}


export default Home;