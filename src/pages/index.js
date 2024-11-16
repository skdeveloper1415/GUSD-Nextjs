import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";



export default function index() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Head>
        <title>GUSD:Login Page</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="login overflow-auto">
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-wrap flex-row justify-center login bg-transparent dark:bg-[#1E2124] xl:border-r xl:border[#F9FAFB] xl:border-opacity-10">
              <div className="px-10 2xl:max-w-lg xl:max-w-lg  w-full p-2" data-aos="fade-right" data-aos-duration="800">
                <form autoComplete="off">

                  <div className="flex flex-wrap items-center mt-8 mb-3">
                    <Image className="relative xl:h-[5.469vw] xl:w-[5.469vw]" src={"/assets/images/login-logo.png"} 
                    width={"103"} height={"105"} alt="EMS" />
                    
                  </div>

                  <div className="mb-2 xl:mb-[2.083vw]">
                    <h2 className="text-[24px] xl:text-[1.875vw] font-semibold text-[#101828] dark:text-white">Welcome to <span className="text-[#05A6F6]">GUSD</span> forms</h2>
                    <div className="text-[#344054] text-sm lg:text-lg xl:text-[0.938vw] font-medium py-2">Please enter details to Login</div>
                  </div>
                  
                  <Link href='/' className='text-[14px] text-[#101828] bg-white mb-8 xl:mb-[2.083vw] flex items-center justify-center font-medium  googlebtn p-3'>
                    <Image className='mr-2' src={"/assets/images/google-icon.svg"} width={"20"} height={"20"} alt="EMS" /> Sign in with Google
                  </Link>

                  <div className='my-2 xl:my-[0.521vw] sign'>
                    <div className="text-[#98A2B3] text-sm font-normal">Or Sign in with Email</div>
                  </div>

                  <div className="relative  mb-2 xl:mb-[0.781vw]">
                    <div className="py-2 "><label htmlFor="" className="text-[#344054] text-sm font-medium">Email</label></div>
                    <InputText id="" className="w-full placeholder:text-[#667085] placeholder:text-sm" placeholder="olivia@mail.com" />
                  </div>

                  <div className="relative mb-2 xl:mb-[0.781vw] password-custom">
                    <div className="py-2"><label htmlFor="username" className="text-[#344054] text-sm font-medium">Password</label></div>
                    <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask className="w-full placeholder:text-[#667085] placeholder:text-sm" />
                  </div>

                  <div className="flex items-center justify-between my-5 xl:my-[1.563vw]">
                    <div className="flex items-center">
                      <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                      <label htmlFor="ingredient1" className="ml-2 text-[#344054] text-[15px] font-medium xl:text-[0.900vw]">Remember me</label>
                    </div>
                    <div>
                      <Link href="" className="text-[#0487C8] font-medium text-[15px] xl:text-[0.900vw] hover:underline" >Forgot password?</Link>
                    </div>
                  </div>

                  <div className="flex w-full my-2 xl:my-[2.083vw]">
                    <Link href={'/dashboard'} className="custmBtn blue radius8 w-full text-center">Login</Link>
                  </div>

                  <div className="flex items-center justify-center mb-8 xl:mb-[2.083vw] text-sm font-medium text-[#667085]">
                    Not Registered Yet?
                    <Link href='/' className="ml-2 text-md font-medium text-[#0487C8] hover:text-[#3366FF]">
                        Create account.
                    </Link>
                  </div>

                </form>
              </div>
            </div>
            <div className="py-[20px] px-[40px]  xl:py-[9.375vw] xl:px-[6.354vw]" data-aos="fade-left" data-aos-duration="800">
            <Image className="relative xl:h-[31.250vw] xl:w-[36.458vw]" src={"/assets/images/login-page.svg"} 
                    width={"700"} height={"600"} alt="EMS" />
            </div>
          </div>
        </div>
    </>
  );
}