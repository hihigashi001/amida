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
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        </Head>
        <props.Component {...props.pageProps} />
        <ToastContainer />
      </ModalProvider>
    </Provider>
  )
}

export default App
