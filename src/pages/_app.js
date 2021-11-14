import "src/styles/globals.css";
import ReactModal from "react-modal"
import { ModalProvider } from "react-modal-hook"
import Head from "next/head";
import store from '../redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactModal.setAppElement('#__next')

const App = (props) => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Head>
          <title>あみだくじサイト | Amidakuji.net</title>
          <script data-ad-client="ca-pub-9679478765506731" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <props.Component {...props.pageProps} />
        <ToastContainer />
      </ModalProvider>
    </Provider>
  )
}

export default App
