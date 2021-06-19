import Image from "next/image"
import Link from "next/link"
// layout
import { UserLayout } from "src/layouts/UserLayout"

export const myself = () => {
    return (
        <UserLayout>
            <div className="mb-16">
                <div className="mt-2 p-2">
                    <h1>一人であみだくじを使うシチュエーション</h1>
                    <h2 className="text-primary font-bold my-4">今日のごはんを決める</h2>
                    <div>
                        何を食べたいとか色々困ることがありますよね。例えば、夕飯は何を作ろうか困ったときにご利用下さい。
                    </div>
                    <h4><span>01</span>タイトル・本数・アイテムを決めます。</h4>
                    <div className="p-8">
                        <div>
                            まずは、タイトルを入力します。タイトルはなくても構いませんが、タイトルをつけることによって後から見直した時に何を決めたものなのか把握できるため設定することをお勧めします。
                            本数の決定については、「アイテムを増やす」「アイテムを減らす」ボタンがあるのでそれで２～10本の間で決定します。決めたいものの数で本数を決めましょう。
                            アイテムの編集については、「本数」で決めた数だけ決めごとを入力していきます。今回の場合は、「お刺身」「ステーキ」「パスタ」「ピザ」「カレーライス」と私が好きな食べ物を列挙しました。
                        </div>
                        <Image
                            src="/yuhan.png"
                            alt="夕飯を決めるあみだ作成画面"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>02</span>あみだくじを選ぶ</h4>
                    <div className="p-8">
                        <div>
                            あみだくじを作成したら自動的にあみだくじを選ぶ画面に移動します。「選択する」ボタンでどの棒にするのか選びます。この時、アイテムは見えてる状態なので何処に横線がひかれているのか想像して選ぶとわくわくが止まりません。
                        </div>
                        <Image
                            src="/yuhan2.png"
                            alt="あみだくじを選ぶ"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>03</span>お名前を入力します。</h4>
                    <div className="p-8">
                        <div>
                            入力欄に選んだものがわかるように何か入力します。今回は「これにする」と入力しました。送信ボタンを押すともう元には戻れません。引き返す場合は、キャンセルボタンを押してください。
                        </div>
                        <Image
                            src="/yuhan3.png"
                            alt="お名前を入力します。"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>04</span>他の「選択する」ボタンをすべて選択</h4>
                    <div className="p-8">
                        <div>
                            一人でやる場合は、残りの選択にいては、適当な値「 - 」を入力するボタンがあるのでそれをクリックします。それによって全て選択されたことになるので、あみだくじの結果が表示されます。
                        </div>
                        <Image
                            src="/yuhan4.png"
                            alt="他の「選択する」ボタンをすべて選択"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <h4><span>05</span>結果の確認</h4>
                <div className="p-8">
                    <div>
                        あみだくじの結果を目視で確認します。今回は「パスタ」に決定しました・・・。っあ・・何パスタにしようか・・・あみだで決めよう（笑）
                    </div>
                    <Image
                        src="/yuhan6.png"
                        alt="結果の確認"
                        width={500}
                        height={500}
                    />
                </div>
                <h2 className="text-primary font-bold my-4">最後に</h2>
                <div>
                    如何だったでしょうか。オンラインのあみだくじの利用方法のイメージがつかめたのではないでしょうか。
                    何かを決めなければいけない時にぜひともオンラインあみだくじをご活用下さい。
                    下のボタンからすごく簡単に作成できます！もちろん無料です。
                </div>
                <div className="my-4 flex justify-center">
                    <Link href="/"><a className="p-4 bg-primary hover:bg-secondary text-seoColor font-bold text-xs focus:outline-none">あみだくじを作成する</a></Link>
                </div>
            </div>
        </UserLayout >
    )
}

export default myself;