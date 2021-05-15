import "src/styles/globals.css";
import ReactModal from "react-modal"
import { ModalProvider } from "react-modal-hook"

ReactModal.setAppElement('#__next')

import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </Provider>
  )
}

export default MyApp
