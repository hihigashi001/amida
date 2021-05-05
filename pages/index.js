// liblary
import { useState } from "react"

// shared Componets
import { Button } from "./components/shared/Button"
import { Colgroup } from "./components/shared/Colgroup"

// Componets
import { PlayerHead } from "./components/PlayerHead"
import { PriedFooder } from "./components/PriedFooder"
import { BoderCount } from "./components/BoderCount"

const Home = () => {
  const [count, setCount] = useState(10)

  const onClickOneAdd = () => {
    setCount(() => count + 1)
  }
  const onClickOneSub = () => {
    setCount(() => count - 1)
  }

  return (
    <div>
      <div>
        <h1 className="text-xl">あみだくじ</h1>
      </div>
      <div>
        <Button className="mx-2" onClick={onClickOneAdd}>+1</Button>
        <Button className="mx-2" onClick={onClickOneSub}>-1</Button>
      </div>
      <div className="p-8">
        <PlayerHead playerCount={count} />
        <table className="w-full table-fixed my-4">
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
        <PriedFooder playerCount={count} />
      </div>
    </div>
  )
}


export default Home;