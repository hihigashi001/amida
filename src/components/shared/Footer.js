import Link from "next/link"
import { useRouter } from 'next/router'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from "src/components/shared/Icon"
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { info } from "src/components/shared/Toast"

const Footer = () => {
  const router = useRouter();
  const url = 'https://amidakuji.net' + router.asPath
  const urlChack = router.asPath == "/description"
  return (
    <footer className="fixed bottom-0 w-full text-right text-gray-700 text-sm bg-gray-200 h-12">
      <div>
        {
          (urlChack) ? <Link href="/"><a className="inline-block bg-gray-700 hover:bg-gray-500 border-2 border-gray-200 text-white p-2 font-bold text-xs w-1/2 h-12 text-center"><Icon icon={faHome} /> あみだ作成ページに移動</a></Link>
            : <Link href="/description"><a className="inline-block bg-gray-700 hover:bg-gray-500 border-2 border-gray-200 text-white p-2 font-bold text-xs w-1/2 h-12 text-center"><Icon icon={faHome} /> このサイトの説明</a></Link>
        }
        <CopyToClipboard
          text={url}
          onCopy={() => info(`クリップボードにコピーしました！`)}
        >
          <p className="inline-block bg-blue-500  hover:bg-blue-300 border-2 border-gray-200 text-seoColor p-2 font-bold text-xs focus:outline-none w-1/2 h-12 text-center"><Icon icon={faCopy} /> このページのURLをコピー</p>
        </CopyToClipboard>
      </div>

    </footer>
  );
};

export default Footer;
