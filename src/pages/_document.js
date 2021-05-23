import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="オンラインあみだくじサイトです。完全無料で使えてシンプルかつ簡単にご利用いただけます。サイト上でアミダくじを瞬時に作成してURLを共有することで公平な抽選が可能です。順番決め、幹事決め、チーム分け、グループ分け、係や役割分担、景品の抽選など使い方は工夫次第です。離れた場所にいる場合で何かを決めるのにとても役に立つサイトです。" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="favi16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="favi32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="favi48.png" sizes="48x48" type="image/png" />
          <link rel="icon" href="favi62.png" sizes="62x62" type="image/png" />
          <link rel="apple-touch-icon-precomposed" href="favi150.png" />
          <link rel="canonical" href="https://amidakuji.net/" />
          <meta property="og:title" content="あみだくじサイト" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="オンラインあみだくじサイトです。完全無料で使えてシンプルかつ簡単にご利用いただけます。サイト上でアミダくじを瞬時に作成してURLを共有することで公平な抽選が可能です。順番決め、幹事決め、チーム分け、グループ分け、係や役割分担、景品の抽選など使い方は工夫次第です。離れた場所にいる場合で何かを決めるのにとても役に立つサイトです。" />
          <meta property="og:url" content="https://amidakuji.net/" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content="完全無料シンプルあみだくじオンラインサイト" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
