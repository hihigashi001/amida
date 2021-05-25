import "src/styles/globals.css";
import { useEffect } from "react"
import ReactModal from "react-modal"
import { ModalProvider } from "react-modal-hook"
import Head from "next/head";
import store from '../redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import * as gtag from 'src/utility/gtag'
import { useRouter } from 'next/router'

ReactModal.setAppElement('#__next')

const App = (props) => {
  const router = useRouter()
  // useEffect(() => {
  //   if (!gtag.existsGaId) {
  //     return
  //   }

  //   const handleRouteChange = (path) => {
  //     gtag.pageview(path)
  //   }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])
  return (
    <Provider store={store}>
      <ModalProvider>
        <Head>
          <title>あみだくじサイト</title>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
        </Head>
        <props.Component {...props.pageProps} />
        <ToastContainer />
      </ModalProvider>
    </Provider>
  )
}

export default App
