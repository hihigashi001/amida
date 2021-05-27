import { useRouter } from 'next/router'
import Image from "next/image"
// layout
import { UserLayout } from "src/layouts/UserLayout"
//com
import { Button } from "src/components/shared/Button"

export const multiple = () => {
    const router = useRouter()
    const handleOnClick = () => {
        router.push("/")
    }
    return (
        <UserLayout>
            <div className="mb-16">
                <div className="mt-2 p-2">
                    <h1>みんなであみだくじを使うシチュエーション</h1>
                    <h2 className="text-primary font-bold my-4">飲み会の幹事を決める</h2>
                    <div>
                        誰がやるのか決めたいシチュエーションって結構ありますよね。しかも、事前にインターネット越しに決めるいい方法はないものかって良く思います。特に飲み会の幹事なんかは絶対に公平に決めるべきだと思うんです。
                    </div>
                    <h4><span>01</span>タイトル・本数・アイテムを決めます。</h4>
                    <div className="p-8">
                        <div>
                            まずは、タイトルを入力します。タイトルはなくても構いませんが、タイトルをつけることによって後から見直した時に何を決めたものなのか把握できるため設定することをお勧めします。
                            本数の決定については、「アイテムを増やす」「アイテムを減らす」ボタンがあるのでそれで２～10本の間で決定します。今回は人数が3名でやるので3本にしました。
                            アイテムの編集については、「本数」で決めた数だけ決めごとを入力していきます。今回の場合は、「◎当たり」「✕」のでデフォルトの値をそのまま利用してみます。変更したい場合は、自由に入力することもできますし、選択ボックスから選ぶこともできます。
                        </div>
                        <Image
                            src="/nomi.png"
                            alt="幹事を決めるあみだ作成画面"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>02</span>URLを共有する</h4>
                    <div className="p-8">
                        <div>
                            あみだくじを作成したら自動的にあみだくじを選ぶ画面に移動します。「このページのURLをコピー」ボタンでURLをコピーしてSNSを使ってリンクを仲間と共有しましょう。
                            このページのURLを共有することでリアルタイムでみんなが同じ画面を共有することが出来ます。
                        </div>
                        <Image
                            src="/nomi1.png"
                            alt="URLをコピーして送る"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>03</span>お名前を入力します。</h4>
                    <div className="p-8">
                        <div>
                            作成者もあみだの行方は分からないので、最後に選ぶ必要はありませんが作った人が最後に選ぶことで公平感がでるのでその方法を採用しました。最後に選ぶとドキドキ感が半減して残念ですねー
                        </div>
                        <Image
                            src="/nomi3.png"
                            alt="みんなのお名前を入力します。"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>04</span>結果の確認</h4>
                    <div className="p-8">
                        <div>
                            最後の一人が選んだら自動的にアミダが開封されます。開封後はあみだくじの結果を目視で確認します。今回は「高木」に決定しました・・・。っあ・・俺は友達いないんだった（笑）
                        </div>
                        <Image
                            src="/nomi4.png"
                            alt="他の「選択する」ボタンをすべて選択"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <h2 className="text-primary font-bold my-4">最後に</h2>
                <div>
                    如何だったでしょうか。オンラインのあみだくじの利用方法のイメージがつかめたのではないでしょうか。
                    何かを決めなければいけない時にぜひともオンラインあみだくじをご活用下さい。
                    下のボタンからすごく簡単に作成できます！もちろん無料です。
                </div>
                <div className="my-4 flex justify-center">
                    <Button className="p-4" onClick={handleOnClick}>あみだくじを作成する</Button>
                </div>
            </div>
        </UserLayout >
    )
}

export default multiple;
