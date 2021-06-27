import Link from 'next/link'
// layout
import { UserLayout } from "src/layouts/UserLayout"
import { A8Adsence } from "src/components/shared/A8Adsence"

export const usage = () => {
    return (
        <UserLayout>
            <div className="mb-16">
                <div className="mt-2 p-2">
                    <h1>インターネットであみだくじができる！やり方や作り方を詳しく解説！</h1>
                    <h2 className="text-primary font-bold my-4">あみだくじサイトの使用方法</h2>
                    <div>
                        このサイトは、名前の通りあみだくじを作ることができます。
                        話あっても決まらない役割分担や、イベントの抽選等を決める時に運に任せて物事を決めたいときは誰にでもあるのではないでしょうか。
                        そんな時にさっとあみだくじを作れるサイトを用意しましたので、早速作り方から始めてみましょう。
                    </div>
                    <h2 className="text-primary font-bold my-4">あみだくじ「作り方」かんたんステップ</h2>
                    <ul className="list-decimal list-inside">
                        <li>あみだくじ作成ページに移動</li>
                        <li>タイトル・本数・アイテム(景品)を決定する。</li>
                        <li>作成したあみだくじのURLを参加者に共有する。</li>
                        <li>すべて選択されたら自動であみだくじが見れるようになります。</li>
                    </ul>
                    <div className="my-2">
                        ※あみだくじサイトは、ＰＣやスマホ対応にしています。
                        どの端末で見てもリアルタイムで結果が反映するようになっています。
                    </div>
                </div>
                <div className="mt-2 p-2">
                    <h2 className="text-primary font-bold my-4">よくある質問Q&A</h2>
                    <div className="my-2">
                        <h3>Q. あみだくじ作成ページは？</h3>
                        <p className="p-4">A. 本サイトの下部に固定で表示されています。また、URLを共有するためのボタンを下部に固定で表示されているので共有するご利用下さい。</p>
                    </div>
                    <div className="my-2">
                        <h3>Q. あみだくじサイトの特徴は？</h3>
                        <p className="p-4">A. このサイトの特徴として、ユーザ登録や課金等一切ないので無料で気楽にあみだくじを作成できます。また、みんなでくじ引きをする用途だけでもなく、1人の時でも5択から何かを選びたいという時にもご利用いただけるよう、「残りすべてを選択」ボタンがあります。そのボタンを押すことによって一気に自動で「-」が入力されて結果を表示することができます。</p>
                    </div>
                    <div className="my-2">
                        <h3>Q. あみだくじ作成できる本数は</h3>
                        <p className="p-4">A. ２～10本で作成できます。多すぎると公平性に欠けるため本数制限を行っています。あくまでも公平なゲームである事が大切だと思います。11本以上の場合は、あみだくじではなくて別の方法で決めることをおすすめします。</p>
                    </div>
                    <div className="my-2">
                        <h3>Q. あみだくじの消し方は？</h3>
                        <p className="p-4">A. このサイトのあみだくじは一度作成したら取消、削除できません。また、選択したら取消も出来ません。それによって公平になるので当然な仕様だと思います。ですが、ＵＲＬさえ共有しなければ、新たに新規作成してあみだくじをやり直すことができます。</p>
                    </div>
                    <div className="my-2">
                        <h3>Q. あみだくじのデータ保存期間は？</h3>
                        <p className="p-4">A. 今の所期限は特に決めてないです。データ容量の問題が発生したタイミングで古いデータから削除します。ただし、データの保証はしないためデータが消えたらまずい事柄で本サイトのご利用はご遠慮ください。</p>
                    </div>
                    <div className="my-2">
                        <h3>Q. もしエラーになった場合は？</h3>
                        <p className="p-4">A. エラーが発生した場合は、たいてい画面をリロードすることで解決できます。万が一、解決できない場合は問合せページからご連絡をお願い致します。</p>
                    </div>
                    <div className="my-2">
                        <h3>Q. 本サイトあみだくじの(仕組み)ロジックは？</h3>
                        <p className="p-4">A. JavaScriptの乱数ではしごの横棒1本づつON/OFFを決定しています。そのため、毎回違う横棒が発生する仕組みとなっています。</p>
                    </div>
                    <div className="mt-8 text-primary font-bold">
                        詳しく説明を記載しましたが、まずはやってみた方が理解できると思います。
                        あみだくじ作成ページに移動して、さっそくあみだくじを作ってみましょう。
                    </div>
                    <div className="my-4 flex justify-center">
                        <Link href="/"><a className="p-4 bg-primary hover:bg-secondary text-seoColor font-bold text-xs focus:outline-none">あみだくじを作成する</a></Link>
                    </div>
                </div>
                <A8Adsence />
            </div>
        </UserLayout >
    )
}

export default usage;