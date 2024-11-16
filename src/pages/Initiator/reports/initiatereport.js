import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ProductService } from '../../../service/ProductService';
import { Inter } from '@next/font/google'

const myinter = Inter({
   weight: ['300', '400', '500', '600', '700', '800'],
   subsets: ['latin'],
   display: 'swap'
})

export default function index() {
    const [date, setDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const [SelectperiodExpand, setActivate] = useState("");
   const toggleActiveexpand = () => {
      setActivate(SelectperiodExpand === "SelectperiodExpand" ? "" : "SelectperiodExpand");
   };
   return (
      <>
         <Layout pageTitle="Homepage">
            <div className={myinter.className}>
               <div className="pt-24 md:pt-28 xl:pt-[2.083vw]">
               <div className=""> 
               
               <div className="text-[#113699] font-semibold -tracking-[0.02em] text-xl xl:text-[1.042vw]">
                <h3>Initiate New Report</h3>
               </div>
               <div className="mt-5 xl:mt-[1.250vw]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.833vw] cust-select">
                    {/*------Name of the Employee------*/}
                    <div className="w-full">
                    <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">Name of the Employee</label>
                    <div className="relative">
                    <i className="gusd-employee text-[#667085] text-sm absolute left-[0.8rem] top-[0.8rem] z-10"></i>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select" className="w-full h-11 rounded-md border border-[#E4E7EC] pl-5" style={{ fontSize: '0.875rem', color:'#667085', fontWeight:'400' }} />
                    </div>
                    </div>
                    {/*------Name of the Employee------*/}
                    {/*------School or Departament-----*/}
                    <div className="w-full">
                    <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">School or Departament</label>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full h-11" style={{ fontSize: '0.875rem', color:'#667085', fontWeight:'400' }} />
                    </div>
                    {/*------School or Departament-----*/}
                    {/*-----Period----*/}
                    <div className="w-full">
                    <div className="">
                    <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">Period</label></div>
                    <div className="w-full">
                    <div className="relative custp-calender">
                    <i className="gusd-calendar text-[#667085] text-sm absolute left-[0.8rem] top-[0.8rem] z-10"></i>
                    <i className="gusd-arrow-down text-[#344054] text-xs xl:text-[0.7rem] absolute right-[1.4rem] top-[1.0rem] z-10"></i>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Select Date Range" dateFormat="dd/mm/yy" className="w-full h-11"  />
                    </div>
                    </div>
                    </div>
                    {/*-----Period----*/}
                </div>
               </div>

               {/*--Select Period--*/}
               <div className="mt-5 xl:mt-[1.094vw] pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-[1.250vw]">
                    <div className="col-span-12 lg:col-span-8">
                        {/*---Select Period---*/}
                       <div id={SelectperiodExpand} className="box-shadow-1 bg-white">
                        <div className="flex justify-between items-center p-4 xl:p-[0.833vw]">
                            <div className="text-[#101828] font-semibold -tracking-[0.02em] text-base xl:text-[0.833vw]"><p>Select Period</p></div>
                            <div className=""><Button href={'/'} onClick={toggleActiveexpand} style={{ background: '#ffffff00', border:'0', padding:'0', width:'24px', height:'24px'}}><i className="gusd-expand text-base text-[#101828]"></i></Button></div>
                        </div>
                        <div className="custmCalendar p-4 xl:p-[0.833vw]">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} inline />
                        </div>

                       </div>
                       {/*---Select Period---*/}

                       {/*---Preview Section---*/}
                        <div className="mt-6 xl:mt-[1.250vw]">
                        <div className="bg-white box-shadow-1">
                        <div className="p-4 xl:p-[0.833vw] pb-0">
                        <div className="text-[#101828] font-semibold -tracking-[0.02em] text-base xl:text-[0.833vw]">
                         <p>Preview</p></div></div>
                        <div className="px-3 xl:px-[0.677vw] custp-table-d">
                        <DataTable value={products}>
                        <Column field="Demo" header="Name of Employee" style={{background:'#fff'}}></Column>
                        <Column field="" header="Dates Absent" style={{background:'#fff'}}></Column>
                        <Column field="" header="Absent Codes" style={{background:'#fff'}}></Column>
                        <Column field="" header="Total Hours" style={{background:'#fff'}}></Column>
                        <Column field="" header="Name of Substitute" style={{background:'#fff'}}></Column>
                        </DataTable>
                        </div>                        
                        </div>                        
                        </div>
                       {/*---Preview Section---*/}

                       <div className="mt-[1.250vw]">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="">
                                <Link href={"/"} className="text-[#344054] text-xs xl:text-[0.938vw] font-medium bg-white inline-block border border-[#D0D5DD] rounded xl:rounded-lg py-[0.833vw] px-[2.917vw] box-shadow-2">Back</Link></div>
                            <div className="space-x-4">
                                <Link href={"/"} className="font-medium inline-block text-[#D0D5DD] text-xs xl:text-[0.938vw] py-[0.833vw] px-[2.448vw]">Save</Link>
                                <Link href={"/Initiator/reports/initiatereportdetails"} className="font-medium inline-block text-[#98A2B3] text-xs xl:text-[0.938vw] py-[0.833vw] px-[2.448vw] box-shadow-2 rounded xl:rounded-lg bg-[#F2F4F7] border border-[#F2F4F7]">Submit</Link>
                            </div>
                        </div>
                       </div>

                    </div>
                    <div className="col-span-12 lg:col-span-4">
                       <div className="bg-white box-shadow-1 p-4 rounded-lg xl:p-[0.833vw]">
                        <div className="text-[#101828] font-semibold text-base xl:text-[0.833vw]"><p>Selected Dates</p></div>
                        <div className="flex flex-col justify-center items-center mt-5 xl:mt-0">
                            <div className="text-[#344054] font-normal text-xs xl:text-[0.625vw]"><p>Select a Range Period to start</p></div>
                            <div className="">
                            <Image src={"/assets/images/select-a-range-img.svg"} width={197} height={147} className="w-full" alt="" />
                            </div>
                        </div>
                       </div>

                       <div className="bg-white box-shadow-1 p-4 mt-6 rounded-lg xl:p-[0.833vw] xl:mt-[1.250vw]">
                        <div className="text-[#101828] font-semibold text-base xl:text-[0.833vw]"><p>Absence Codes - Legends</p></div>
                        <div className="flex flex-wrap xl:flex-nowrap gap-4 mt-5 xl:gap-[0.938vw] xl:mt-[1.250vw]">
                            <div className="text-[#344054] font-semibold text-xs xl:text-[0.729vw] space-y-1">
                                <p>L - <span className="font-normal">Last Day Worked</span></p>
                                <p>OU - <span className="font-normal">Other Unpaid</span></p>
                                <p>PA - <span className="font-normal">Personal (Approved)</span></p>
                                <p>NA - <span className="font-normal">Personal (Not Approved)</span></p>
                                <p>W - <span className="font-normal">Witness (District)</span></p>
                                <p>DC - <span className="font-normal">District Covid</span></p>
                                <p>B - <span className="font-normal">Berevement</span></p>
                            </div>
                            <div className="text-[#344054] font-semibold text-xs xl:text-[0.729vw] space-y-1">
                                <p>WC - <span className="font-normal">Worker’s Compensation</span></p>
                                <p>D - <span className="font-normal">District Approved</span></p>
                                <p>I - <span className="font-normal">Illness</span></p>
                                <p>J - <span className="font-normal">Jury Duty</span></p>
                                <p>S - <span className="font-normal">Suspension</span></p>
                                <p>V - <span className="font-normal">Vacation</span></p>
                                <p>PN - <span className="font-normal">Personal Necessity</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                </div>

               {/*--Select Period--*/}
               
               </div>
               </div>
            </div>
         </Layout>
      </>
   );
}