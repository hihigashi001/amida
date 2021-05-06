// liblary
import { useState } from "react"

// shared Componets
import { Button } from "./components/shared/Button"
import { Colgroup } from "./components/shared/Colgroup"

// Componets
import { PlayerHead } from "./components/PlayerHead"
import { PriedFooder } from "./components/PriedFooder"
import { BoderCount } from "./components/BoderCount"
import { HideModal } from "./components/HideModal"
import { HideModalSpace } from "./components/HideModalSpace"

const Home = () => {
  const [count, setCount] = useState(10)

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

  return (
    <div>
      <div>
        <h1 className="text-xl">あみだくじ</h1>
      </div>
      <div>
        <Button className="mx-2" onClick={onClickOneAdd}>+1</Button>
        <p className="inline font-bold text-2xl mx-2">{count} 本</p>
        <Button className="mx-2" onClick={onClickOneSub}>-1</Button>
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
        <PriedFooder playerCount={count} />
      </div>
    </div>
  )
}


export default Home;