import "src/styles/globals.css";
import ReactModal from "react-modal"
import { ModalProvider } from "react-modal-hook"

ReactModal.setAppElement('#__next')

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
