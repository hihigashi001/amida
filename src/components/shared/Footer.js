import { useRouter } from 'next/router'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from "src/components/shared/Icon"
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const router = useRouter()
  const url = 'https://amida.vercel.app' + router.asPath
  return (
    <footer className="fixed bottom-0 w-full text-right text-gray-700 text-sm bg-gray-200">
      <div className="">
        <button className="bg-gray-700  hover:bg-gray-500 border-2 border-gray-200 text-white p-2 font-bold text-xs focus:outline-none w-1/2" onClick={() => router.push("/")}><Icon icon={faHome} /> あみだ作成ページに移動する</button>
        <CopyToClipboard
          text={url}
          onCopy={() => alert(`クリップボードにコピーしました！`)}
        >
          <button className="bg-blue-500  hover:bg-blue-300 border-2 border-gray-200 text-white p-2 font-bold text-xs focus:outline-none w-1/2"><Icon icon={faCopy} /> クリップボードにURLをコピーする</button>
        </CopyToClipboard>
      </div>
      <small className="mr-8">
          <a>&copy; {new Date().getFullYear()} Imoto All Rights Reserved.</a>
      </small>
    </footer>
  );
};

export default Footer;
