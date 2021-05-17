import "src/styles/globals.css";
import ReactModal from "react-modal"
import { ModalProvider } from "react-modal-hook"
import Head from "next/head";
import store from '../redux/store'
import { Provider } from 'react-redux'

ReactModal.setAppElement('#__next')

const App = (props) => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Head>
          <title>あみだくじ</title>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
        </Head>
        <props.Component {...props.pageProps} />
      </ModalProvider>
    </Provider>
  )
}

export default App
