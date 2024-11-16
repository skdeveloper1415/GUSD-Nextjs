import React, { useEffect,useState} from "react";
import Top from "../layout/top";
import Bottom from "../layout/bottom";
import Head from "next/head";
import noInternet from 'no-internet'
import NoConnection from "@/pages/noconnection";
import { Inter } from '@next/font/google'

const myinter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Layout({ children, ...pageProps }) {
  
  const [IsOnline, setOnline] = useState(true);
  useEffect(() => {
    noInternet().then(offline => {
      if (offline) {
        setOnline(false); 
      }
    })
  }, []);
  
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to EMS</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.ico" />
      </Head>
      
      {IsOnline ? <><Top/><main className={myinter.className}><div className='pl-[95px] xl:pl-[7.292vw]
       pr-[15px] xl:pr-[3.125vw] xl:pt-[4.792vw]'>{children}</div></main> <Bottom /></> : <NoConnection/>}

    </>
  );
}
 