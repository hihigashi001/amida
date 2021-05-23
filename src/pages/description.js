import Link from 'next/link'
// import AdSense from 'react-adsense';
// layout
import { UserLayout } from "src/layouts/UserLayout"

export const description = () => {

    return (
        <UserLayout>
            <div className="mb-16">
                <div className="mt-2 p-2">
                    <h1 className="text-primary font-bold my-4">このサイトの利用方法</h1>
                    <ul className="list-decimal list-inside">
                        <li>あみだくじ作成ページで、あみだくじを作成します。</li>
                        <li>作成したあみだくじのURLをコピーして、メールやLineなどで共有してご活用下さい。</li>
                        <li>あみだくじは全員が選択すると、自動的に表示されます。</li>
                        <li>予期せぬエラーが発生した場合は、ページをリロードすることで解決することがあります。</li>
                    </ul>
                </div>
                <div className="mt-2 p-2">
                    <h1 className="text-primary font-bold my-4">このサイトについて</h1>
                    <div>
                        当サイトではあみだくじを自動的に作ることが出来ます。
                        もちろんあみだくじの結果はすべての選択肢が選択されるまで隠されているので公平なくじが出来ます。
                        オンラインなのでインターネット経由で引くことが出来ます。
                        スマホ、PCなどに対応していて、完全無料で会員登録も必要ありません。あみだくじアプリのようなインストール作業も不要です。また、広告はこのページだけです。
                    </div>
                </div>
                {/* <div className="mt-2 p-2">
                    <AdSense.Google
                        client='ca-pub-9679478765506731'
                        // slot='7806394673'
                    />
                </div> */}
                <div className="bg-white mt-8 p-8">
                    <h1 className="text-primary font-bold flex justify-center mb-8">プライバシーポリシー・免責事項</h1>
                    <h2 className="text-primary font-bold my-4">広告について</h2>
                    <div>
                        当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。Cookieを無効にする方法やGoogleアドセンスに関する詳細は
                        「<a className="text-blue-700" href="https://policies.google.com/technologies/ads?gl=jp" target="_blank" rel="noopener noreferrer">広告 – ポリシーと規約 – Google</a>」をご確認ください。
                    </div>
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
                        <p>運営者名　：hiro higashi</p>
                        <p>お問合せ　：「<Link href="/contact"><a className="text-blue-700">こちらから</a></Link>」</p>
                    </div>
                </div>
            </div>
        </UserLayout >
    )
}

export default description;