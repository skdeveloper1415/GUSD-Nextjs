import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { RadioButton } from "primereact/radiobutton";
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { InitiatenewReport } from '../../../service/InitiatenewReport';
import { Inter } from '@next/font/google'

const myinter = Inter({
   weight: ['300', '400', '500', '600', '700', '800'],
   subsets: ['latin'],
   display: 'swap'
})

export default function index() {
    const [visible, setVisible] = useState(false);
    const [value4, setValue4] = useState(50);
    const [ingredient, setIngredient] = useState('');
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
        InitiatenewReport.getProductsMini().then(data => setProducts(data));
    }, []);

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="">
                <span>{rowData.country.name}</span>
            </div>
        );
    };


    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="">
                <span className="custrowspan">{rowData.representative.name}</span>
            </div>
        );
    };

    const deleteBodyTemplate = (product) => {
        return <><Link href={'/'} className="text-[#344054] text-base font-[400]"><i className="gusd-delete"></i></Link></>;
    };

    

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

                {/*-----Edit Rejected Report-----*/}
                    <div className="bg-[#FEF0C7] w-full rounded font-normal text-[#93370D] -tracking-[0.02em] text-sm xl:text-[0.729vw] p-2 xl:p-[0.417vw]">
                        <p>Missing info for David, please review</p>
                    </div>
                {/*-----Edit Rejected Report-----*/}

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
                        <div className="px-3 xl:px-[0.677vw] custp-table">
                        <DataTable value={products} rowGroupMode="rowspan" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="representative.name" header="Name of Employee" body={representativeBodyTemplate} style={{ minWidth: '9rem', background:'#F9FAFB', textAlign:'center' }}></Column>
                        <Column field="name" header="Dates Absent" style={{ minWidth: '5rem' }}></Column>
                        <Column field="country" header="Absent Codes" body={countryBodyTemplate} style={{ minWidth: '5rem', textAlign:'center' }}></Column>
                        <Column field="company" header="Name of Substitute" style={{ minWidth: '5rem', textAlign:'center' }}></Column>
                        <Column field="status" header="Name of Substitute" style={{ minWidth: '5rem', textAlign:'center' }}></Column>
                        <Column field="" header="Actions" body={deleteBodyTemplate} style={{ minWidth: '3rem', textAlign:'center' }}></Column>
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
                                <Link href={"/"} className="font-medium text-[#667085] text-xs xl:text-[0.938vw] py-[0.833vw] px-[2.448vw] inline-block">Save</Link>
                                <Link href={"JavaScript:void(0);"} className="font-medium text-[#FFFFFF] text-xs xl:text-[0.938vw] py-[0.833vw] px-[2.448vw] inline-block box-shadow-2 rounded xl:rounded-lg bg-[#113699] border border-[#113699]" onClick={() => setVisible(true)}>Submit</Link>
                            </div>
                        </div>
                       </div>

                    </div>
                    <div className="col-span-12 lg:col-span-4">
                       <div className="bg-white box-shadow-1 p-4 rounded-lg xl:p-[0.833vw]">
                        <div className="text-[#101828] font-semibold text-base xl:text-[0.833vw]"><p>Selected Dates</p></div>
                    {/*----10th March, 2023---*/}
                       <div className="mt-[24px] xl:mt-[1.250vw]">
                        <div className="text-[#344054] font-normal text-xs xl:text-[0.625vw] flex flex-wrap items-center justify-between lg:flex-nowrap"><p className="w-full lg:w-[7.813vw]">10th March, 2023</p><span className="w-full h-[1px] bg-[#E4E7EC] inline-block"></span></div>
                       </div>
                       <div className="mt-[16px] xl:mt-[0.833vw]">
                        <div className="bg-[#F2F4F7] rounded p-2 xl:p-[0.417vw] custseledate">
                        <div className="w-full">
                        <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">Absent Code</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full h-7" />
                        </div>

                        <div className="w-full">
                        <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">Name of the Substitute</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full h-7" />
                        </div>

                        <div className="p-[8px] mt-[8px] xl:mt-[0.417vw] xl:p-[0.417vw]">
                        <div className="flex flex-wrap gap-3">
                            <div className="">
                            <div className="flex gap-4 xl:gap-[0.833vw]">
                            <div className="flex items-center">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                            <label htmlFor="ingredient1" className="ml-2 text-sm text-[#1E3E5A] xl:text-[0.729vw]">Full Day</label>
                            </div>
                            <div className="flex items-center">
                            <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                            <label htmlFor="ingredient2" className="ml-2 text-sm text-[#1E3E5A] xl:text-[0.729vw]">Partial Day</label>
                            </div>
                            </div>
                            </div>
                            <div className="">
                                <div className="flex">
                                    <div className="relative custinput-h">
                                        <div className="bg-[#F2F4F7] flex items-center justify-center absolute right-[0rem] top-[0.1rem] text-[0.75rem] font-normal text-[#818C95] w-[1.563rem] h-[1.35rem] border border-[#E4E7EC]"><p>H</p></div>
                                        <InputNumber inputId="integeronly" value={value4} onValueChange={(e) => setValue4(e.value)} className="bg-[#ffffff00] h-[1.35rem]" />
                                    </div>

                                    <div className="relative custinput-m">
                                        <div className="bg-[#F2F4F7] flex items-center justify-center absolute right-[0rem] top-[0.1rem] text-[0.75rem] font-normal text-[#818C95] w-[1.563rem] h-[1.35rem] border border-[#E4E7EC] rounded-br-[5px] rounded-tr-[5px]"><p>M</p></div>
                                        <InputNumber inputId="integeronly" value={value4} onValueChange={(e) => setValue4(e.value)} className="bg-[#ffffff00] h-[1.35rem]" />
                                    </div>

                                   
                                    
                                    
                                </div>
                            </div>
                        </div>
                            
                        </div>

                        </div>
                       </div>
                       {/*----10th March, 2023---*/}

                       {/*----10th March, 2023---*/}
                       <div className="mt-[24px] xl:mt-[1.250vw]">
                        <div className="text-[#344054] font-normal text-xs xl:text-[0.625vw] flex flex-wrap items-center justify-between lg:flex-nowrap"><p className="w-full lg:w-[7.813vw]">14th March, 2023</p><span className="w-full h-[1px] bg-[#E4E7EC] inline-block"></span></div>
                       </div>
                       <div className="mt-[16px] xl:mt-[0.833vw]">
                        <div className="bg-[#F2F4F7] rounded p-2 xl:p-[0.417vw] custseledate">
                        <div className="w-full">
                        <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">Absent Code</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full h-7" />
                        </div>

                        <div className="w-full">
                        <label htmlFor="username" className="text-[#344054] text-xs xl:text-[0.625vw] font-semibold -tracking-[0.02em]">Name of the Substitute</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full h-7" />
                        </div>

                        <div className="p-[8px] mt-[8px] xl:mt-[0.417vw] xl:p-[0.417vw]">
                        <div className="flex flex-wrap gap-3">
                            <div className="">
                            <div className="flex gap-4 xl:gap-[0.833vw]">
                            <div className="flex items-center">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                            <label htmlFor="ingredient1" className="ml-2 text-sm text-[#1E3E5A] xl:text-[0.729vw]">Full Day</label>
                            </div>
                            <div className="flex items-center">
                            <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                            <label htmlFor="ingredient2" className="ml-2 text-sm text-[#1E3E5A] xl:text-[0.729vw]">Partial Day</label>
                            </div>
                            </div>
                            </div>
                            <div className="">
                                <div className="flex">
                                    <div className="relative custinput-h">
                                        <div className="bg-[#F2F4F7] flex items-center justify-center absolute right-[0rem] top-[0.1rem] text-[0.75rem] font-normal text-[#818C95] w-[1.563rem] h-[1.35rem] border border-[#E4E7EC]"><p>H</p></div>
                                        <InputNumber inputId="integeronly" value={value4} onValueChange={(e) => setValue4(e.value)} className="bg-[#ffffff00] h-[1.35rem]" />
                                    </div>

                                    <div className="relative custinput-m">
                                        <div className="bg-[#F2F4F7] flex items-center justify-center absolute right-[0rem] top-[0.1rem] text-[0.75rem] font-normal text-[#818C95] w-[1.563rem] h-[1.35rem] border border-[#E4E7EC] rounded-br-[5px] rounded-tr-[5px]"><p>M</p></div>
                                        <InputNumber inputId="integeronly" value={value4} onValueChange={(e) => setValue4(e.value)} className="bg-[#ffffff00] h-[1.35rem]" />
                                    </div>

                                   
                                    
                                    
                                </div>
                            </div>
                        </div>
                            
                        </div>

                        </div>
                       </div>
                       {/*----10th March, 2023---*/}

                       {/*--Apply Button--*/}
                        <div className="custbutn mt-6 xl:mt-[1.250vw]">
                            <Button className="" label="Apply" onClick={() => setVisible(true)}></Button>
                        </div>
                       {/*--Apply Button--*/}
                       
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

               <Dialog header="Submit Report" visible={visible} style={{ width: '20.677vw' }} onHide={() => setVisible(false)} className="custdialog-head">

                <div className="text-[#344054] font-normal text-base xl:text-[0.833vw]"><p className="">
                Your report has been sent for review, you will be notified of updates.
                </p>
                </div>
                <div className="mt-4 text-center">
                <Link href={"/Initiator/reports"} className="font-medium text-[#FFFFFF] text-xs xl:text-[0.938vw] py-[0.833vw] px-[2.448vw] inline-block box-shadow-2 rounded xl:rounded-lg bg-[#113699] border border-[#113699]">OK</Link>
                </div>
            </Dialog>

            </div>
         </Layout>
      </>
   );
}