// liblary
import { useState } from "react"
import { useRouter } from 'next/router'

// shared Componets
import { Button } from "src/components/shared/Button"

// Componets
import { Pried } from "src/components/index/Pried"
import { amidaCreate } from "src/redux/amidaSlice"
import { TitleInput } from "src/components/index/TitleInput"

// function
import { Random10, RandomURL } from "src/utility/function"

// layout
import { UserLayout } from "src/layouts/UserLayout"

const Home = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [count, setCount] = useState(5)
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
    const pushPage = '/user/' + url
    amidaCreate(sendData)
    router.push(pushPage)

  }

  return (
    <UserLayout>
      <div>
        <div className="my-4 flex justify-center">
          <h1 className="text-gray-700">タイトル・本数・アイテムを入力してください。</h1>
        </div>
        <div className="mb-4">
          <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <label className="text-gray-700">あみだくじの本数</label><label className="text-xs text-gray-700"> ※2~10本で選んで、アイテムを編集してください。</label>
        <div className="flex justify-center">
          <p className="font-bold text-2xl mx-2 text-gray-700">{count} 本</p>
        </div>
        <div className="flex justify-center">
          <Button className="p-4 mt-4" onClick={onClickOneAdd}>アイテムを増やす</Button>
          <Button className="p-4 mt-4 ml-4" onClick={onClickOneSub}>アイテムを減らす</Button>
        </div>
        <Pried
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
        <div className="flex justify-center mb-16">
          <Button className="p-4 my-8 w-96" onClick={onClickCreate}>あみだくじを作る</Button>
        </div>
      </div>
    </UserLayout>
  )
}


export default Home;