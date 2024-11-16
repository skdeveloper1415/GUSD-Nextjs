import Link from 'next/link'
import { Dialog } from 'primereact/dialog'
import { InputSwitch } from 'primereact/inputswitch'
import React, { useState } from 'react'

export default function Editpopup(props) {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [checked1, setChecked1] = useState(false);
 
    const bothFalse = ()=>{
       setVisible2(false) ;
       setVisible(false)
    }

 
    return (
        <div>
            <div className="bg-[#F5F6F7]  p-5">
                <div className="pb-4">
                    <button onClick={() => props.popupstate()}> <i className='gusd-close-sidebar text-black ' style={{ fontSize: 20 }}></i>
                    </button>
                </div>
                <div>
                    <div className="text-[#113699] text-[16px] font-semibold leading-6">Glendale Unified School District</div>
                    <div className="text-[#344054] text-[12px] font-normal leading-4">Weekly Absence Report - Classified form</div>
                </div>
                <div className=' pt-2'>
                    <div className=' py-3'>
                        <div className='flex items-center justify-between border-b px-2 py-4'>
                            <div className='text-[#344054] text-[12px] font-normal leading-5 tracking-[-0.02em]'><p>School or Department</p></div>
                            <div className='text-[#344054] text-[12px] font-semibold leading-5 tracking-[-0.02em]'><p>Glendale High School</p></div>
                        </div>
                        <div className='flex items-center justify-between border-b py-4 px-2'>
                            <div className='text-[#344054] text-[12px] font-normal leading-5 tracking-[-0.02em]'><p>Form</p></div>
                            <div className='text-[#344054] text-[12px] font-semibold leading-5 tracking-[-0.02em]'><p>6th March 2023</p></div>
                        </div>
                        <div className='flex items-center justify-between border-b py-4 px-2'>
                            <div className='text-[#344054] text-[12px] font-normal leading-5 tracking-[-0.02em]'><p>To</p></div>
                            <div className='text-[#344054] text-[12px] font-semibold leading-5 tracking-[-0.02em]'><p>12th March 2023</p></div>
                        </div>
                        <div className='flex items-center justify-between border-b py-4 px-2'>
                            <div className='text-[#344054] text-[12px] font-normal leading-5 tracking-[-0.02em]'><p>Status</p></div>
                            <div className='text-[#93370D] text-[12px] font-semibold leading-5 tracking-[-0.02em] bg-[#FEF0C7] px-2 rounded-sm'><p>Pending of Approval</p></div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] p-5">
                    <table className="table-auto">
                        <thead>
                            <tr className="h-[36px] ">
                                <th className="text-[#667085] text-[12px] font-medium leading-5 text-left px-1">Name of Employee</th>
                                <th className="text-[#667085] text-[12px] font-medium leading-5 text-left px-1">Dates Absent</th>
                                <th className="text-[#667085] text-[12px] font-medium leading-5 text-left px-1">Absent Codes</th>
                                <th className="text-[#667085] text-[12px] font-medium leading-5 text-left px-1">Substitute</th>
                                <th className="text-[#667085] text-[12px] font-medium leading-5 text-left px-1 pl-2">Total Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-[40px] border-b">
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">Kalvin </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">7th Mar’23 </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">DC </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">David </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1 pl-2">4h </td>
                            </tr>
                            <tr className="h-[40px] border-b">
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">Samston </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">9th Mar’23 </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">PA </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">Kalvin </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1 pl-2">6h </td>
                            </tr>
                            <tr className="h-[40px]">
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">David </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">12th Mar’23 </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">V </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1">Samstom </td>
                                <td className="text-[#344054] text-[12px] font-normal leading-5 text-left px-1 pl-2">8h </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="dialogpoput flex  justify-center py-8">
                    <InputSwitch checked={checked1} className='dialogpoput' onChange={(e) => setChecked1(e.value)} /><span className="text-[#1E3E5A] text-[14px] font-medium leading-5 tracking-[-0.02em] pl-2 ">Add e Signature</span>
                </div>
                <div className="bg-[#EFF0F1]">
                    <div className="p-5">
                        <div className="text-[#344054] text-[14px] font-medium leading-5 tracking-[-0.02em]">Absence Codes - Legends</div>
                        <div className="grid grid-cols-2 p-2">
                            <div className="cols-span-1">
                                <table className="table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">L </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Last Day Worked</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">NA </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Personal (Not Approved)</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">OU </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Other Unpaid</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">PA </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Personal (Approved)</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">WC </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Worker’s Compensation</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">D </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- District Approved</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">I </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Illness</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="cols-span-1">
                                <table className="table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">J </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Jury Duty</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">S </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Suspension</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">V </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Vacation</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">W </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Witness (District)</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">DC </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- District Covid</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">PN </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Personal Necessity</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#344054] text-[12px] font-semibold leading-5 text-right">B </td>
                                            <td className="text-[#344054] text-[12px] font-normal leading-5">- Berevement</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-center justify-between my-2 px-2 xl:my-[2.083vw] pt-20 gap-4">
                    <button className="custmBtn2 border rounded-lg text-center text-[#344054]"><i className="gusd-close-circle-bold text-[14px] pr-3"></i>Cancel
                    </button>
                    <button className="custmBtn2 text-[#D92D20] border rounded-lg text-center" onClick={() => setVisible(true)}><i className="gusd-close pr-3 text-[12px]"></i>Reject
                    </button>
                    <button className="custmBtn2 border rounded-lg bg-[#E4E7EC] text-[#98A2B3] text-center"><i className="gusd-check pr-3 text-[14px]"></i>Approve
                    </button>
                </div>
            </div>

            <div className="dialogpoput flex justify-content-center">
                <Dialog visible={visible} position="right" style={{ width: '30vw' }} className="dialogpoput dialogres" onHide={() => setVisible(false)}>

                    <div className="text-[#101828] text-lg py-2 pt-5 font-bold">Reject Report</div>
                    <div className="text-[#344054] text-xs pb-2 font-medium">Enter the reason for rejection</div>
                    <div>
                        <textarea placeholder="Information Missing for  'David', Please review and resubmit." className="border text-[14px] font-normal border-1 border-[#E4E7EC] w-full"></textarea>
                    </div>
                    <div className="pt-2 flex pb-[-2px] justify-center">
                        <Link href={''} className="custmBtn3 rounded-lg text-[#FFFFFF] text-center bg-[#113699]" onClick={() => setVisible2(true)}>Send
                        </Link>
                    </div>

                </Dialog>
            </div>

            <div className="dialogpoput flex justify-content-center">
                <Dialog visible={visible2} position="right" style={{ width: '30vw' }} className="dialogpoput dialogres" onHide={() => setVisible2(false)}>

                    <div className="text-[#101828] text-lg py-2 pt-5 font-bold">Reject Report</div>
                    <div className="text-[#249144] text-[16px] pb-2 font-medium">Message sent successfully!</div>
                    <div className="text-[#344054] text-[14px]"> Information Missing for  "David", Please review and resubmit.</div>
                    <div className="pt-2 flex pb-[-2px] justify-center">
                        <Link href={''} className="custmBtn3 rounded-lg text-[#FFFFFF] text-center bg-[#113699]" onClick={() => bothFalse()}>Ok
                        </Link>
                    </div>

                </Dialog>
            </div>
        </div>
    )
}

