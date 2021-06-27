import Link from 'next/link'
// import AdSense from 'react-adsense';
// layout
import { UserLayout } from "src/layouts/UserLayout"
import { A8Adsence } from "src/components/shared/A8Adsence"

export const description = () => {

    return (
        <UserLayout>
            <div className="mb-16">
                <div className="mt-2 p-2">
                    <h1>このサイトの説明になります。</h1>
                    <h2 className="text-primary font-bold my-4">このサイトの利用方法</h2>
                    <ul className="list-decimal list-inside mb-2">
                        <li>あみだくじ作成ページで、あみだくじを作成します。</li>
                        <li>作成したあみだくじのURLをコピーして、メールやLineなどで共有してご活用下さい。</li>
                        <li>あみだくじは全員が選択すると、自動的に表示されます。</li>
                        <li>予期せぬエラーが発生した場合は、ページをリロードすることで解決することがあります。</li>
                    </ul>
                    <p>詳しい説明は　：「<Link href="/usage"><a className="text-blue-700">こちらから</a></Link>」</p>
                </div>
                <div className="mt-2 p-2">
                    <h2 className="text-primary font-bold my-4">このサイトについて</h2>
                    <div>
                        当サイトではあみだくじを自動的に作ることが出来ます。
                        もちろんあみだくじの結果はすべての選択肢が選択されるまで隠されているので公平なくじが出来ます。
                        オンラインなのでインターネット経由で引くことが出来ます。
                        スマホ、PCなどに対応していて、完全無料で会員登録も必要ありません。あみだくじアプリのようなインストール作業も不要です。
                        <a href="http://ninkirank.misty.ne.jp/14/hihigashi001.htm" target="_blank" >人気サイトランキング</a>に登録しており上位を目指してます。
                    </div>
                </div>
                <div className="mt-2 p-2">
                    <h2 className="text-primary font-bold my-4">あみだくじとは(Wiki調べ)</h2>
                    <div>
                        あみだくじとは、線のはしに当たりはずれなどを書いて隠し、各自が引き当てるくじのことです。
                        平行線の間に横線を入れ、はしご状にすることが多いことから「はしごくじ」といわれることもあります。
                        もともとは、人数分の線を引き、一端にそれぞれ異なる金額を書いて隠し、各自が引き当てた金額を出させ、集めた金で茶菓子などを買い、平等に分配する仕組みだったと言われています。

                    </div>
                </div>
                <div className="mt-2 p-2">
                    <h2 className="text-primary font-bold my-4">世界のあみだくじ事情</h2>
                    <div>
                        あみだくじは調べてみると、中国由来のようで、中国韓国あたりでは使われているようですね。欧米の人たちには一から説明する必要があると思います。
                        中国語の言葉から Ghost Leg と訳されているのも見かけますが、個人的には ladder lottery 「はしごくじ」の方が見た目からしても分かりやすいと思います。
                        どちらにせよ、１から説明するので、Amidakujiのままでいい気もしますね。

                        Amidakuji is one of the popular methods of decision-making in Asia.
                        あみだくじは、アジア圏でよくやられている意思決定方法のひとつです。

                        あとは口で言うより、やって見せる方が早いと思います。

                    </div>
                </div>
                <div className="mt-2 p-2">
                    <h2 className="text-primary font-bold my-4">「あみだくじ」を使うシチュエーション</h2>
                    <div className="mb-2">
                        プライベートでの使用が多いようにも思えるこのゲームですが、仕事でも意外と使えます。例えば、記者発表会を開催するに当たり、司会役、受付役、記録写真係、質疑応答のマイク係など、仕事の役割分担を決めるときに役に立ちます。
                        また、プロジェクト案件を複数同時に進行させなければいけない場合、誰がどの案件を担当するかを無作為に決めたいときや、お弁当の買い出しに行く人を決めたりしたいときも、じゃんけんよりも楽しめるし、公平性が保てます。
                        では、具体的なシチュエーションでの使い方を解説しよう。
                    </div>
                    <p>一人で使う場合　：「<Link href="/myself"><a className="text-blue-700">こちらから</a></Link>」</p>
                    <p>複数人で使う場合　：「<Link href="/multiple"><a className="text-blue-700">こちらから</a></Link>」</p>
                    <p>オフラインで使う場合　：「<Link href="/offline"><a className="text-blue-700">こちらから</a></Link>」</p>

                </div>
                <div className="bg-white mt-8 mb-4 p-8">
                    <h2 className="text-primary font-bold flex justify-center mb-8">プライバシーポリシー・免責事項</h2>
                    <h2 className="text-primary font-bold my-4">免責事項</h2>
                    <div>
                        当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                    </div>
                    <h2 className="text-primary font-bold my-4">著作権について</h2>
                    <div>
                        当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
                        当サイトは著作権や肖像権の侵害を目的としたものではありません。
                    </div>
                    <h2 className="text-primary font-bold my-4">リンクについて</h2>
                    <div>
                        当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。むしろ多くの方に利用されたいのでSNSで拡散して頂けると幸いです。
                        ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
                    </div>
                    <h2 className="text-primary font-bold my-4">お問い合わせ</h2>
                    <div>
                        <p>運営者名 ：hiro higashi</p>
                        <p>お問合せ ：「<Link href="/contact"><a className="text-blue-700">こちらから</a></Link>」</p>
                    </div>
                </div>
                <A8Adsence />
            </div>
        </UserLayout >
    )
}

export default description;