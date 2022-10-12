import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import Layout from 'components/Layout'
import { ThemeProvider } from 'context/state'
import AOS from 'aos'
import Loading from '@/components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);


  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      // offset: 50,
    });
  }, [])

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <ThemeProvider><Layout>{page}</Layout></ThemeProvider>)

  // return getLayout(<><Loading loading={loading} /><Component {...pageProps} /></>)
  return getLayout(<><ToastContainer /><Component {...pageProps} /></>)
}
