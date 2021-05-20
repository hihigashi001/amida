import { useRouter } from 'next/router'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from "src/components/shared/Icon"
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const router = useRouter()
  const url = 'https://amida.vercel.app' + router.asPath
  const urlChack = router.asPath == "/"
  return (
    <footer className="fixed bottom-0 w-full text-right text-gray-700 text-sm bg-gray-200 h-12">
      <div>
        {
          (!urlChack) ? <button className="bg-gray-700  hover:bg-gray-500 border-2 border-gray-200 text-white p-2 font-bold text-xs focus:outline-none w-1/2 h-12" onClick={() => router.push("/")}><Icon icon={faHome} /> あみだ作成ページに移動</button>
            : <button className="bg-gray-700  hover:bg-gray-500 border-2 border-gray-200 text-white p-2 font-bold text-xs focus:outline-none w-1/2 h-12" onClick={() => router.push("/")}><Icon icon={faHome} /> このサイトの説明</button>
        }
        <CopyToClipboard
          text={url}
          onCopy={() => alert(`クリップボードにコピーしました！`)}
        >
          <button className="bg-blue-500  hover:bg-blue-300 border-2 border-gray-200 text-white p-2 font-bold text-xs focus:outline-none w-1/2 h-12"><Icon icon={faCopy} /> このサイトのURLをコピー</button>
        </CopyToClipboard>
      </div>

    </footer>
  );
};

export default Footer;
