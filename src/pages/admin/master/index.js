import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/layout/layout";
import { Inter } from '@next/font/google';
import { InputText } from "primereact/inputtext";
import { Sidebar } from 'primereact/sidebar';
import { Checkbox } from "primereact/checkbox";


const myinter = Inter({
   weight: ['300', '400', '500', '600', '700', '800'],
   subsets: ['latin'],
   display: 'swap'
})



export default function index() {
   const [visibleRight, setVisibleRight] = useState(false);
   const [visibleRight1, setVisibleRight1] = useState(false);
   const [checked, setChecked] = useState(false);

   return (
      <>
         <Layout pageTitle="Master">
            <div className={myinter.className}>
               <div className="pt-24 md:pt-28 xl:pt-[2.083vw]">
                  <div className="flex justify-end mb-8">
                     <div className="xl:w-[16.667vw] md:w-[200px] masterinput">
                        <span className="w-full p-input-icon-left">
                           <i className="gusd-search text-[#667085] mt-0" />
                           <InputText placeholder="Search" className="w-full radius8" />
                        </span>
                     </div>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 xl:gap-[2.083vw] mb-10">
                     <div className="bg-white box-shadow-2 radius10 p-[32px] xl:p-[1.667vw]">
                        <Image className="relative xl:h-[7.917vw] xl:w-[8.333vw] mx-auto" src={"/assets/images/Reason_Master_img.png"}
                           width={"145"} height={"150"} alt="Cancellation Reason Master" />
                        <div className="mt-[20px] xl:mt-[2.083vw] text-center text-[#344054] text-[20px] font-semibold  xl:text-[1.250vw]">Cancellation Reason Master</div>
                        <div className="mt-[15px] xl:mt-[1.042vw] text-center">
                           <Link href="" onClick={() => setVisibleRight(true)} className="custmBtn blue radius10">Manage</Link>
                        </div>
                     </div>
                     <div className="bg-white box-shadow-2 radius10 p-[32px] xl:p-[1.667vw]">
                        <Image className="relative xl:h-[8.333vw] xl:w-[8.333vw] mx-auto" src={"/assets/images/Upload_Forms_img.png"}
                           width={"160"} height={"160"} alt="Cancellation Reason Master" />
                        <div className="mt-[20px] xl:mt-[2.083vw] text-center text-[#344054] text-[22px] font-semibold  xl:text-[1.250vw]">Upload Forms</div>
                        <div className="mt-[15px] xl:mt-[1.042vw] text-center">
                           <Link href="" className="custmBtn blue radius10">Manage</Link>
                        </div>
                     </div>
                     <div className="bg-white box-shadow-2 radius10 p-[32px] xl:p-[1.667vw]">
                        <Image className="relative xl:h-[8.333vw] xl:w-[9.375vw] mx-auto" src={"/assets/images/Master_1_img.png"}
                           width={"180"} height={"160"} alt="Cancellation Reason Master" />
                        <div className="mt-[20px] xl:mt-[2.083vw] text-center text-[#344054] text-[22px] font-semibold  xl:text-[1.250vw]">Master 1</div>
                        <div className="mt-[15px] xl:mt-[1.042vw] text-center">
                           <Link href="" className="custmBtn blue radius10">Manage</Link>
                        </div>
                     </div>
                     <div className="bg-white box-shadow-2 radius10 p-[32px] xl:p-[1.667vw]">
                        <Image className="relative xl:h-[8.333vw] xl:w-[12.500vw] mx-auto" src={"/assets/images/Master_2_img.png"}
                           width={"240"} height={"160"} alt="Cancellation Reason Master" />
                        <div className="mt-[20px] xl:mt-[2.083vw] text-center text-[#344054] text-[22px] font-semibold  xl:text-[1.250vw]">Master 2</div>
                        <div className="mt-[15px] xl:mt-[1.042vw] text-center">
                           <Link href="" className="custmBtn blue radius10">Manage</Link>
                        </div>
                     </div>
                     <div className="bg-white box-shadow-2 radius10 p-[32px] xl:p-[1.667vw]">
                        <Image className="relative xl:h-[8.333vw] xl:w-[8.333vw] mx-auto" src={"/assets/images/scholl_master_img.png"}
                           width={"160"} height={"160"} alt="Cancellation Reason Master" />
                        <div className="mt-[20px] xl:mt-[2.083vw] text-center text-[#344054] text-[22px] font-semibold  xl:text-[1.250vw]">School Master</div>
                        <div className="mt-[15px] xl:mt-[1.042vw] text-center">
                           <Link href="" onClick={() => setVisibleRight1(true)} className="custmBtn blue radius10">Manage</Link>
                        </div>
                     </div>
                     <div className="bg-white box-shadow-2 radius10 p-[32px] xl:p-[1.667vw]">
                        <Image className="relative xl:h-[8.333vw] xl:w-[9.063vw] mx-auto" src={"/assets/images/upload_doc_img.png"}
                           width={"174"} height={"160"} alt="Cancellation Reason Master" />
                        <div className="mt-[20px] xl:mt-[2.083vw] text-center text-[#344054] text-[22px] font-semibold  xl:text-[1.250vw]">Upload Help Document</div>
                        <div className="mt-[15px] xl:mt-[1.042vw] text-center">
                           <Link href="" className="custmBtn blue radius10">Manage</Link>
                        </div>
                     </div>

                  </div>

               </div>

            </div>
            {/* Cancellation Reason Master */}
            <div>
               <div className="masterpopup">
                  <Sidebar visible={visibleRight} position="right" onHide={() =>
                     setVisibleRight(false)} className="customesidebar1 masterpopup w-full xl:w-[50vw]">

                     <div className="bg-[#F5F6F7] h-full relative  p-5">
                        <div className="pb-4">
                           <button onClick={() => setVisibleRight(false)}> <i className='gusd-close-sidebar text-black ' style={{ fontSize: 20 }}></i>
                           </button>
                        </div>
                        <div className="">
                           <div className="text-[#113699] text-[16px] xl:text-[0.938vw] font-semibold leading-4">Cancellation Reason Master</div>
                           <div className="text-[#344054] text-[12px] xl:text-[0.729vw] font-light leading-4">Master</div>
                        </div>

                        <div className="mt-[24px] xl:mt-[1.250vw] table-css">
                           <table className="table-auto overflow-auto radius8 ">
                              <thead>
                                 <tr className="">
                                    <th className="w-10 text-center">
                                       #</th>
                                    <th className="text-left">Values</th>
                                    <th className="text-left">Phone Call Request</th>
                                    <th className="text-left" >Meeting Request</th>
                                    <th className="text-left">
                                       Doc Translation Request
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >1</td>
                                    <td>Approver Cancelled </td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> </td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >2</td>
                                    <td>No Show</td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> </td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >3</td>
                                    <td>School Closed</td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></td>
                                    <td>  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> </td>
                                 </tr>

                              </tbody>
                           </table>
                        </div>

                        <div className='lg:absolute left-0 right-0 bottom-0 px-4 py-5 text-right'>
                           <Link href="" className="cancelBtnbottom radius8 mr-3">Add New</Link>
                           <Link href="" className="custmBtnbottom blue radius8" onClick={() => setVisibleRight(false)}>Save</Link>
                        </div>



                     </div>
                  </Sidebar>
               </div>
            </div>
               {/* Cancellation Reason Master */}

         {/* School Master*/}
               <div>
               <div className="masterpopup">
                  <Sidebar visible={visibleRight1} position="right" onHide={() =>
                     setVisibleRight1(false)} className="customesidebar1 masterpopup w-full xl:w-[50vw]">

                     <div className="bg-[#F5F6F7] h-full relative  p-5">
                        <div className="pb-4">
                           <button onClick={() => setVisibleRight1(false)}> <i className='gusd-close-sidebar text-black ' style={{ fontSize: 20 }}></i>
                           </button>
                        </div>
                        <div className="">
                           <div className="text-[#113699] text-[16px] xl:text-[0.938vw] font-semibold leading-4">School Master</div>
                           <div className="text-[#344054] text-[12px] xl:text-[0.729vw] font-light leading-4">Master</div>
                        </div>

                        <div className="mt-[24px] xl:mt-[1.250vw] table-css">
                           <table className="table-auto overflow-auto radius8 ">
                              <thead>
                                 <tr className="">
                                    <th className="w-10 text-center">
                                       #</th>
                                    <th className="text-left">School  ID</th>
                                    <th className="text-left">School Name</th>
                                    <th className="text-left" >Grades</th>
                                    <th className="text-left">
                                    School City
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >1</td>
                                    <td>PTM001</td>
                                    <td> Anderson Mill ES</td>
                                    <td> 1</td>
                                    <td>  Orange</td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >2</td>
                                    <td>PTM002</td>
                                    <td> Blackland Prairie ES</td>
                                    <td> -</td>
                                    <td> -</td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >3</td>
                                    <td>PTM003</td>
                                    <td> Bluebonnet ES</td>
                                    <td>3</td>
                                    <td>Pembroke Pines</td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >4</td>
                                    <td>PTM004 </td>
                                    <td>Brushy Creek ES</td>
                                    <td>5</td>
                                    <td>Naperville</td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >5</td>
                                    <td>PTM005 </td>
                                    <td>Brushy Creek ES</td>
                                    <td>5</td>
                                    <td>Naperville</td>
                                 </tr>
                                 <tr className="h-[40px] border-b">
                                    <td className="text-center" >6</td>
                                    <td>PTM006 </td>
                                    <td>Brushy Creek ES</td>
                                    <td>5</td>
                                    <td>Naperville</td>
                                 </tr>

                              </tbody>
                           </table>
                        </div>

                        <div className='lg:absolute left-0 right-0 bottom-0 px-4 py-5 text-right'>
                           <Link href="" className="cancelBtnbottom radius8 mr-3">Add New</Link>
                           <Link href="" className="custmBtnbottom blue radius8" onClick={() => setVisibleRight1(false)}>Save</Link>
                        </div>



                     </div>
                  </Sidebar>
               </div>
            </div>
               {/* School Master */}


         </Layout>
      </>
   );
}