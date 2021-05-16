// liblary
import { useState } from "react"
import { useRouter } from 'next/router'

// shared Componets
import { Button } from "src/components/shared/Button"

// Componets
import { PlayerHead } from "src/components/index/PlayerHead"
import { PriedFooder } from "src/components/index/PriedFooder"
import { BoderCount } from "src/components/index/BoderCount"
import { HideModal } from "src/components/index/HideModal"
import { HideModalSpace } from "src/components/index/HideModalSpace"
import { amidaCreate } from "src/redux/amidaSlice"
import { TitleInput } from "src/components/index/TitleInput"

// function
import { Random10, RandomURL } from "src/utility/function"

// layout
import { UserLayout } from "src/layouts/UserLayout"

const Home = () => {
  const router = useRouter()
  const [title, setTitle] = useState("あみだ題名")
  const [count, setCount] = useState(5)
  const [pried1, setPried1] = useState("◎当たり")
  const [pried2, setPried2] = useState("✕")
  const [pried3, setPried3] = useState("✕")
  const [pried4, setPried4] = useState("✕")
  const [pried5, setPried5] = useState("◎当たり")
  const [pried6, setPried6] = useState("✕")
  const [pried7, setPried7] = useState("✕")
  const [pried8, setPried8] = useState("✕")
  const [pried9, setPried9] = useState("✕")
  const [pried10, setPried10] = useState("✕")
  const url = RandomURL()
  const random = Random10()

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
    const sendData = {
      title: title,
      url: url,
      count: count,
      random: random,
      pried1: pried1,
      pried2: pried2,
      pried3: pried3,
      pried4: pried4,
      pried5: pried5,
      pried6: pried6,
      pried7: pried7,
      pried8: pried8,
      pried9: pried9,
      pried10: pried10
    }
    const pushPage = '/user?page=' + url
    amidaCreate(sendData)
    router.push(pushPage)

  }

  return (
    <UserLayout>
      <div>
        <div>
          <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
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
    </UserLayout>
  )
}


export default Home;