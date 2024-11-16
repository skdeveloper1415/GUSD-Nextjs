import React, { useState } from "react";
import { Inter } from '@next/font/google'
import Layout from "@/components/layout/layout";

const myinter = Inter({
   weight: ['300', '400', '500', '600', '700', '800'],
   subsets: ['latin'],
   display: 'swap'
})



export default function index() {

  
   return (
      <>
         <Layout pageTitle="dashboard">
            <div className={myinter.className}>
               <div className="bg-[red">
                  <div className="pt-[1.667vw] text-[12px] font-semibold">Dashboard</div>
               </div>
            </div>
         </Layout>
      </>
   );
}