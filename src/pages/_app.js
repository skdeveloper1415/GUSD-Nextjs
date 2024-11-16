import '@/styles/globals.css';
import '@/styles/sujit.css';
import '@/styles/skstyle.css';
import '@/styles/neha.css';
import '@/styles/nilesh.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import { Provider } from "react-redux";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import { Inter } from '@next/font/google'

const myinter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return <main className={myinter.className}>
   <Component {...pageProps} /><ToastContainer autoClose={500} />
    </main>
}





