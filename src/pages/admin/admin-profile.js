import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { InputTextarea } from "primereact/inputtextarea";
import Image from "next/image";
import { InputNumber } from "primereact/inputnumber";
import { Password } from "primereact/password";
import { Calendar } from 'primereact/calendar';


export default function index() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState(58151);
    const [date, setDate] = useState(null);

    return (
        <>
            <Layout pageTitle="Admin Profile">
                <div className="pt-10 px-4 md:px-10">
                    <div className="bg-white shadow-[0px_10.299px_13.732px_-3.43299px_rgba(16,24,40,0.1)] p-5">
                        <div className="text-[#344054] font-medium text-xl">Personal Information</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-2">
                            <div className="px-2">
                                <div className="flex justify-start gap-4">
                                    <Image src="/assets/images/user1.svg" alt="user" width="80" height="24" />
                                    <div>
                                        <div className="text-[#818C95] text-sm font-medium">Your Profile Picture</div>
                                        <div className="text-[#818C95] text-xs font-normal">Previous Login: 09-09-2022</div>
                                        <Link href='#' className=" my-2 bg-white border border-[#2D5BE5] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] font-medium text-[#2D5BE5] flex items-center text-xs py-[6px] px-[10px] rounded-[8px] justify-center"><i className="pi pi-camera pr-2"></i><span>Change</span></Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="mb-1 mt-2">
                                        <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">First Name</label>
                                        <div className="mt-1"><InputText id="username" placeholder="Type Here" className="w-full placeholder:text-[#667085] " aria-describedby="username-help" /></div>
                                    </div>
                                    <div className="mb-1 mt-2">
                                        <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Last Name</label>
                                        <div className="mt-1"><InputText id="username" placeholder="Type Here" className="w-full placeholder:text-[#667085] " aria-describedby="username-help" /></div>
                                    </div>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Bio</label>
                                    <div className="mt-1"><InputTextarea keyfilter="int" className="w-full placeholder:text-[#667085]" placeholder="Bio" rows={3} cols={30} /></div>
                                    <small id="username-help" className="text-[#2D5BE5] text-[11px] md:text-[0.625vw] font-medium"><i className="pi pi-pencil pr-2" style={{ fontSize: 10 }}></i>Change File</small>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Employee ID</label>
                                    <div className="mt-1"><InputText id="username" placeholder="ID123" className="w-full placeholder:text-[#667085] " aria-describedby="username-help" /></div>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Date of Birth</label>
                                    <div className="mt-1"><Calendar value={date} className="w-full placeholder:text-[#667085]" placeholder="11-12-1995" onChange={(e) => setDate(e.value)} /></div>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Email</label>
                                    <div className="mt-1"><InputText id="username" placeholder="Type Here" className="w-full placeholder:text-[#667085] " aria-describedby="username-help" /></div>
                                    <small id="username-help" className="text-[#2D5BE5] text-[11px] md:text-[0.625vw] font-medium"><i className="pi pi-pencil pr-2" style={{ fontSize: 10 }}></i>Change Email</small>
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Phone Number</label>
                                    <div className="mt-1"><InputNumber className="w-full placeholder:text-[#667085]" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} /></div>
                                    <small id="username-help" className="text-[#2D5BE5] text-[11px] md:text-[0.625vw] font-medium"><i className="pi pi-pencil pr-2" style={{ fontSize: 10 }}></i>Change Phone Number</small>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Current Password</label>
                                    <div className="password-wrapper w-full mt-1">
                                        <Password value={value} className="w-full placeholder:text-[#667085]" placeholder="*******" onChange={(e) => setValue(e.target.value)} feedback={false} />
                                    </div>
                                    <small id="username-help" className="text-[#2D5BE5] text-[11px] md:text-[0.625vw] font-medium"><i className="pi pi-pencil pr-2" style={{ fontSize: 10 }}></i>Change Password</small>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Address</label>
                                    <div className="mt-1"><InputTextarea keyfilter="int" className="w-full placeholder:text-[#667085]" placeholder="nia@gmail.com" rows={3} cols={30} /></div>
                                    <small id="username-help" className="text-[#2D5BE5] text-[11px] md:text-[0.625vw] font-medium"><i className="pi pi-pencil pr-2" style={{ fontSize: 10 }}></i>Change File</small>
                                </div>
                                <div className="mb-1 mt-2">
                                    <label className="text-[#344054] text-sm md:text-[0.833vw] font-medium pb-2" htmlFor="username">Website</label>
                                    <div className="mt-1"><InputText id="" placeholder="test.com" className="w-full placeholder:text-[#667085] " aria-describedby="username-help" /></div>
                                    <small id="username-help" className="text-[#2D5BE5] text-[11px] md:text-[0.625vw] font-medium"><i className="pi pi-pencil pr-2" style={{ fontSize: 10 }}></i>Change Website</small>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <Link href='#' className="bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] font-medium text-[#344054] flex items-center text-xs py-[6px] px-[10px] rounded-[8px] justify-center w-20">Save</Link>
                            <Link href='' className="w-32 text-center flex items-center tableBtn blue radius8">Exit</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}