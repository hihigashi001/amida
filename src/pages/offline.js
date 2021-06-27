import Link from "next/link"
import Image from "next/image"
// layout
import { UserLayout } from "src/layouts/UserLayout"
import { A8Adsence } from "src/components/shared/A8Adsence"

export const offline = () => {
    return (
        <UserLayout>
            <div className="mb-16">
                <div className="mt-2 p-2">
                    <h1>オフラインであみだくじをやる場合</h1>
                    <h2 className="text-primary font-bold my-4">普通のあみだくじ</h2>
                    <div>
                        誰もが一度は作ったことがあるのではないでしょうか。しかし、いざ作ってみるとどうやって作っていいのか分からない人もいると思います。
                        一般的なあみだくじの作り方を詳しく紹介しますのでご安心ください。
                    </div>
                    <h2 className="text-primary font-bold my-4">用意するもの</h2>
                    <div>
                        紙・ペン
                    </div>
                    <Image
                        src="/offline.png"
                        alt="紙とペン"
                        width={500}
                        height={500}
                    />
                    <h2 className="text-primary font-bold my-4">作り方</h2>
                    <h4><span>01</span>縦線を引きます。</h4>
                    <div className="p-8">
                        <div>
                            何本の線を引くかは、どんなあみだくじにするかによって変わります。
                            例えば、複数のが「当たり」「はずれ」をきめて全員でくじ引きをする場合は、人数分の縦線を引きます。
                            または、何処にいきたいか決めたいときは、「九州」「四国」「関東」等結果の数だけ縦線を引きます。今のたとえなら3本ですね。
                        </div>
                        <Image
                            src="/offline1.png"
                            alt="あみだの縦線"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>02</span>結果を書きます。</h4>
                    <div className="p-8">
                        <div>
                            先ほど書いた線の下に、くじ引きの結果を書きます。当サイトではアイテムと呼んでいます。
                            何かを決めたいときには「当たり」「はずれ」を書くことが多いです。順番を決めるなら数字で番号等を書けば良いと思います。
                        </div>
                        <Image
                            src="/offline2.png"
                            alt="あみだの結果を書く"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>03</span>横線を書きます。</h4>
                    <div className="p-8">
                        <div>
                            縦線を横線で「はしご状」に横線を加えます。手書きの場合は、書いている人が横線を書くと平等性に欠けるので横線を書いた人は一番最後に選ぶと良いでしょう。
                        </div>
                        <Image
                            src="/offline3.png"
                            alt="あみだの横線を書く"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>04</span>完成です。</h4>
                    <div className="p-8">
                        <div>
                            最後に、横線が見えないように何かで隠すか紙を折り曲げるなどして完成になります。
                        </div>
                        <Image
                            src="/offline4.png"
                            alt="あみだの完成"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h2 className="text-primary font-bold my-4">あみだくじのルール</h2>
                    <h4><span>01</span>くじ引きを選ぶ</h4>
                    <div className="p-8">
                        <div>
                            作成以外の人から選ぶようにします。一人のあみだくの場合は横線を多く入れる等して結果がわかない状態にしましょう。
                        </div>
                        <Image
                            src="/offline5.png"
                            alt="あみだを選ぶ"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h4><span>02</span>あみだくじを開いて線をたどります。</h4>
                    <div className="p-8">
                        <div>
                            基本的には、下に向かって線をたどりますが、横線があったらそちらに進みます。手書きの場合は、上方向に線を引っ張る等の予期せぬ線があったら一生ゴールにたどりつけない事もあります。
                        </div>
                        <Image
                            src="/offline6.png"
                            alt="あみだの線をたどる"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h2 className="text-primary font-bold my-4">手書きあみだくじの問題点</h2>
                    <h4><span>01</span>複数の人が必要</h4>
                    <div className="p-8">
                        <div>
                            一人であみだくじを作っても線を増やしてところで公平なくじ引きなのか議論が発生するところだともいます。また、線を増やすことによってゴールに行けなくなる可能性や線が複雑になりすぎて見づらくなるなどの支障も発生します。そのため、手書きのあみだくじは複数人で物事を決めるのに向いていると思います。
                        </div>
                    </div>
                    <h4><span>02</span>誰が作るか問題</h4>
                    <div className="p-8">
                        <div>
                            複数の人でやった場合でも問題が発生します。それは、誰が作るか問題です。作った人が最後にあみだを選べばそのあみだくじは公平にはなりますが、作った人は最後に選ばないといけない等の制約があります。また、手書き作ると意外と横線のセンスが問われるので作る手間と負担が制作者にかかります。
                        </div>
                    </div>
                    <h4><span>03</span>みんなで集まれない問題</h4>
                    <div className="p-8">
                        <div>
                            現在、世の中的に同じ部屋に多くの人が集まることが困難になっています。衛生的に考えても良くないし、密になりやすいのでいざという時にできない事が多いと思います。
                        </div>
                    </div>

                    <h2 className="text-primary font-bold my-4">最後に</h2>
                    <div>
                        如何だったでしょうか。普通の手書きのあみだくじはオンラインあみだくじサイトに比べて奥が深く難しく感じたのではないでしょうか。
                        公平なジャッジをするためにはぜひともオンラインあみだくじをご活用下さい。
                        下のボタンからすごく簡単に作成できます！もちろん無料です。
                    </div>
                </div>
                <div className="my-4 flex justify-center">
                    <Link href="/"><a className="p-4 bg-primary hover:bg-secondary text-seoColor font-bold text-xs focus:outline-none">あみだくじを作成する</a></Link>
                </div>
                <A8Adsence />
            </div>
        </UserLayout >
    )
}

export default offline;