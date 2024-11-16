import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from "primereact/dialog";
import { Tag } from 'primereact/tag';
import Layout from "@/components/layout/layout";
import { MyAccountTable2 } from "@/components/service/myaccounttable2";
import { Sidebar } from "primereact/sidebar";
import Editpopup from "@/components/popup/editpopup";

export default function index() {
    const [activate, setActivate] = useState("");
    const toggleActive = () => {
        setActivate(activate === "actives" ? "" : "actives");
    };
    const [checked, setChecked] = useState(false);
    const [myaccountt, setProducts] = useState([]);

    const [visibleRight, setVisibleRight] = useState(false);
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');

    const basiccard =
        [
            {
                id: '1',
                name: 'Kalvin',
                dates: '7th Mar’23',
                codes: 'DC',
                substitute: 'David',
                hours: '4h',
            },
            {
                id: '2',
                name: 'Samston',
                dates: '9th Mar’23',
                codes: 'PA',
                substitute: 'Kalvin',
                hours: '6h',
            },
            {
                id: '3',
                name: 'David',
                dates: '12th Mar’23',
                codes: 'V',
                substitute: 'Samstom',
                hours: '8h',
            }
        ];

    const show = (position) => {
        setPosition(position);
        setVisible(true);
    };

    const TaskStatusSL = (product) => {
        switch (product.TaskSLA) {
            case 'Rejected':
                return 'danger';

            case 'Pending for Approval':
                return 'warning';

            case 'Submitted':
                return 'info';
            case 'Approved':
                return 'success';

            default:
                return null;
        }
    };
    const TaskStatusSLA = (product) => {
        return <Tag value={product.TaskSLA} severity={TaskStatusSL(product)}></Tag>;
    };
    const alljobactionContent = () => {
        return (
            <div className="flex justify-center w-full gap-2">

                <Link href='' className="py-2 px-2.5" onClick={() => show('right')}><i className="gusd-eye text-[#667085] text-[20px] font-meduim"></i></Link>
                <Link href='' className="py-2 px-2.5" onClick={() => setVisibleRight(true)}><i className="gusd-edit text-[18px] text-[#667085] font-meduim"></i></Link>


            </div>
        );
    };
    useEffect(() => {
        MyAccountTable2.getProductsSmall2().then((data) => setProducts(data.slice(0, 9)));

    }, []);

    return (
        <>

            <Layout pageTitle="Report">
                <div className="report-wrapper pt-24 md:pt-28 xl:pt-[2.083vw]">
                    <div className="flex justify-end visible lg:hidden">
                        <Button icon="pi pi-bars" onClick={toggleActive} style={{ color: '#308B90', background: '#ffffff00', border: '1', borderColor: '#308B90', width: '38px', padding: '6px 0', borderRadius: '4px' }}></Button>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 xl:gap-[1.250vw] pb-5">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-3">
                            <div>
                                <div id={activate} className="bg-[#FFFFFF] rounded-lg box-shadow-1 radius4 p-4 xl:p-[0.833vw] top-5 lg:sticky fixed -left-96 lg:left-0 lg:overflow-hidden lg:h-auto z-10" data-aos="fade-up" data-aos-duration="800">
                                    <div className="flex justify-between text-[#101828] font-medium text-base tracking-[0.02em] xl:text-[0.932vw]">
                                        <p>Forms</p>
                                        <div className="xl:w-[10.058vw] md:w-[200px] custinput">
                                            <span className="w-full p-input-icon-left">
                                                <i className="gusd-search text-[#667085] mt-0" />
                                                <InputText placeholder="Search" className="w-full" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 h-[600px] xl:h-[38vw]  overflow-auto">

                                        <div className="bg-[#0F1E4C]  radius4 p-[16px] xl:p-[0.833vw]">
                                            <h6 className="font-medium text-[16px] text-[#fff] xl:text-[0.833vw] mb-2">Weekly Absence Report-Classified</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] text-[16px] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#fff] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#fff] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#fff] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-normal text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">6th Period Teaching Assignment</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-medium text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">Weekly Absence Report- Certificated_Admin</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-medium text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">
                                                Classified Sub Time Report</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-medium text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">
                                                Time Report</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px]text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-medium text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">
                                                Substitute Request-Certificated</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-normal text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">6th Period Teaching Assignment</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-medium text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">Weekly Absence Report- Certificated_Admin</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-normal text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">6th Period Teaching Assignment</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#fff]  radius4 p-[16px] xl:p-[0.833vw] border-b border-[#E4E7EC]">
                                            <h6 className="font-medium text-[16px] text-[#344054] xl:text-[0.833vw] mb-2">Weekly Absence Report- Certificated_Admin</h6>
                                            <div className="flex justify-between gap-2 xl:gap-[0.833vw] xl:mt-[0.833vw]">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#EAEFFF] xl:text-[0.833vw] border border-[#99B2FF] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        32
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw]  text-[#344054] font-normal">Submitted</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#D1FADF] text-[16px] xl:text-[0.833vw] border border-[#A6F4C5] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        9
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Approved </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-[#FEF3F2] text-[16px] xl:text-[0.833vw] border border-[#FEE4E2] radius4 text-[#0D256D] font-semibold xl:w-[1.927vw] xl:h-[1.250vw] w-[37px] text-center">
                                                        2
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#344054] font-normal">Rejected</div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 col-span-12 lg:col-span-9" data-aos="fade-down" data-aos-duration="800">
                            <div className="bg-[#fff] box-shadow-2 radius8 border border-[#E4E7EC]" >
                                <div className="flex items-center justify-between p-[20px] xl:px-[1.250vw] xl:py-[0.990vw] border-b border-[#E4E7EC] ">
                                    <p className="text-[18px] xl:text-[0.938vw]  text-[#101828] font-medium">Weekly Absence Report-Classified</p>

                                    <div className="flex gap-2 xl:gap-[0.990vw] items-center">
                                        <Link href='/Initiator/reports/initiatereport' className="w-full text-center tableBtn blue radius8">
                                            <i className="gusd-pluse-circle mx-1.5 "></i> Initiate New Report</Link>
                                        <div className="relative dropcheck">
                                            <Menu as="div">
                                                <Menu.Button><i className="gusd-filter-1"></i></Menu.Button>
                                                <Transition
                                                    as={Fragment}

                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-50 w-[100px] xl:w-[9.542vw]  origin-top-right bg-white rounded-[5px] xl:rounded-[5px] shadow-[0px_2px_2px_rgba(20, 46, 82, 0.2)]">
                                                        <div className="px-4 pt-5 pb-3 xl:px-[0.833vw] xl:py-[0.833vw] top-[-10px]">
                                                            <div className="mb-4 xl:mb-[0.417vw]">

                                                                <div className="flex items-center mb-2">
                                                                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                                                    <label htmlFor="ingredient1" className="ml-2 text-[#344054] text-[15px] font-medium xl:text-[0.900vw]">Year</label>
                                                                </div>
                                                                <div className="flex items-center mb-3">
                                                                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                                                    <label htmlFor="ingredient1" className="ml-2 text-[#344054] text-[15px] font-medium xl:text-[0.900vw]">Month</label>

                                                                </div>

                                                                <Link href="" className="flex justify-center bg-[#3366FF] text-[14px] text-[#fff] px-5 py-1.5  rounded-md w-full">Select</Link>

                                                            </div>




                                                        </div>

                                                    </Menu.Items>
                                                </Transition>


                                            </Menu>
                                        </div>
                                        <Link href=""> <i className="gusd-expand"></i></Link>
                                    </div>
                                </div>
                                <div className="">
                                    <DataTable className="custpaginator custIcons custmBtnTable custTable" scrollable value={myaccountt} paginator responsiveLayout="scroll" paginatorTemplate="PrevPageLink PageLinks NextPageLink" rows={11}>
                                        <Column field="SL" header="SL#" sortable style={{ minWidth: '3rem' }}></Column>

                                        <Column field="WeekDuration" header="Week Duration" sortable style={{ minWidth: '5rem' }}></Column>
                                        <Column field="Submittedon" header="Submitted on" sortable style={{ minWidth: '5rem' }}></Column>


                                        <Column field="Status" header="Status" body={TaskStatusSLA} sortable style={{ minWidth: '8rem' }}></Column>

                                        <Column field="Remarks" header="Remarks" sortable style={{ minWidth: '12rem' }}></Column>



                                        <Column field="action" header="Action" align='center' body={alljobactionContent} style={{ minWidth: '6rem' }}></Column>

                                    </DataTable>

                                </div>

                                <Dialog className="relative reports-popup" visible={visible} position={position}
                  style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setVisible(false)} draggable={false} resizable={false}>
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="col-span-1 lg:col-span-8 bg-[#F5F6F7] h-auto">
                      <div className="p-5">
                        <div onClick={() => setVisible(false)} className="py-3"><Image src="/assets/images/sidebarright.svg" alt="user" width="24" height="24" /></div>

                        <div className="text-[#113699] text-md lg:text-[0.833vw] font-bold">Glendale Unified School District</div>
                        <div className="text-[#344054] text-xs lg:text-[0.625vw] font-medium">Weekly Absence Report - Classified form</div>

                        <div className="pt-3">
                          <div className="flex justify-between text-[#344054] text-[12px] py-[0.729vw] px-[0.417vw] border-b border-[#E4E7EC]">
                            <div className="font-medium">School or Department </div>
                            <div className="font-semibold ">Glendale High School</div>
                          </div>
                          <div className="flex justify-between text-[#344054] text-[12px] py-[0.729vw] px-[0.417vw] border-b border-[#E4E7EC]">
                            <div className="font-medium">From </div>
                            <div className="font-semibold ">6th March 2023</div>
                          </div>
                          <div className="flex justify-between text-[#344054] text-[12px] py-[0.729vw] px-[0.417vw] border-b border-[#E4E7EC]">
                            <div className="font-medium">To </div>
                            <div className="font-semibold ">12th March 2023</div>
                          </div>
                          <div className="flex justify-between text-[#344054] text-[12px] py-[0.729vw] px-[0.417vw] border-b border-[#E4E7EC]">
                            <div className="font-medium">Status </div>
                            <Tag severity="" value="Approved" className="" style={{background:'#EBFFF3',color:'#003D19'}}></Tag>
                            {/* <div >Approved</div> */}
                          </div>
                          <div className="flex justify-between text-[#344054] text-[12px] py-[0.729vw] px-[0.417vw] border-b border-[#E4E7EC]">
                            <div className="font-medium">Approved By </div>
                            <div className="font-semibold ">Alrick Barwa</div>
                          </div>
                          <div className="flex justify-between text-[#344054] text-[12px] py-[0.729vw] px-[0.417vw]">
                            <div className="font-medium">Submitted By </div>
                            <div className="font-semibold ">John Paul</div>
                          </div>
                        </div>

                        <div className="py-3 emp-simple-tbl">
                          <DataTable value={basiccard}>
                            <Column field="name" header="Name of Employee"></Column>
                            <Column field="dates" header="Dates Absent"></Column>
                            <Column field="codes" header="Absent Codes"></Column>
                            <Column field="substitute" header="Substitute"></Column>
                            <Column field="hours" header="Total Hours"></Column>
                          </DataTable>
                        </div>

                        <div className="bg-[#EFF0F1] rounded-[8px] p-3 mt-3">
                          <div className="text-[#344054] font-medium text-[14px] pb-3">Absence Codes - Legends</div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="text-[#344054] text-[12px]">
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">L -</div>
                                <div className="col-span-4 pl-1">Last Day Worked</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">NA -</div>
                                <div className="col-span-4 pl-1">Personal (Not Approved)</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">OU -</div>
                                <div className="col-span-4 pl-1">Other Unpaid</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">PA -</div>
                                <div className="col-span-4 pl-1">Personal (Approved)</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">WC -</div>
                                <div className="col-span-4 pl-1">Personal (Approved)</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">D -</div>
                                <div className="col-span-4 pl-1">District Approved</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">I -</div>
                                <div className="col-span-4 pl-1">Illness</div>
                              </div>
                            </div>
                            <div className="text-[#344054] text-[12px]">
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">L -</div>
                                <div className="col-span-4 pl-1">Last Day Worked</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">NA -</div>
                                <div className="col-span-4 pl-1">Personal (Not Approved)</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">OU -</div>
                                <div className="col-span-4 pl-1">Other Unpaid</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">PA -</div>
                                <div className="col-span-4 pl-1">Personal (Approved)</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">WC -</div>
                                <div className="col-span-4 pl-1">Personal (Approved)</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">D -</div>
                                <div className="col-span-4 pl-1">District Approved</div>
                              </div>
                              <div className="grid grid-cols-5 pb-0.5">
                                <div className="col-span-1 font-semibold text-right">I -</div>
                                <div className="col-span-4 pl-1">Illness</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border mt-10 border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] font-medium text-[#344054] flex items-center py-[10px] px-[8px] rounded-[8px] justify-center">
                          <i className="mr-3 gusd-print-outline"></i><span>Print</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 lg:col-span-4 bg-[#EFF0F1] h-auto">
                      <div className="p-5">
                        <div className="text-[#344054] text-[16px] font-medium py-3">Form History</div>
                        <div>
                          <div className="text-[#000000] text-[12px] font-normal text-center py-2 separator">Yesterday</div>
                          <div className="flex items-start justify-between gap-2 py-2">
                            <Image src="/assets/images/user1.svg" alt="user" width="32" height="32" />
                            <div className="">
                              <div className="flex justify-between">
                                <div>
                                  <div className="text-[#344054] font-semibold text-[14px]">Jhon Paul</div>
                                  <div className="text-[#667085] text-[10px] pb-2 pt-1">
                                    <i className="mr-1 gusd-commented"></i>
                                    <span>Commented on parties Tab</span>
                                  </div>
                                </div>
                                <div className="text-[#344054] text-[12px]">09:00</div>
                              </div>
                              <div className="text-[#344054] text-[12px] font-normal p-[8px] bg-[#F5F6F7] rounded-[8px]">changed the input name of employee from “Kalvin” to “Samston”.</div>
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-2 py-2">
                            <Image src="/assets/images/user2.svg" alt="user" width="32" height="32" />
                            <div className="">
                              <div className="flex justify-between">
                                <div>
                                  <div className="text-[#344054] font-semibold text-[14px]">Jhoana Maria</div>
                                  <div className="text-[#667085] text-[10px] pb-2 pt-1">
                                    <i className="mr-1 gusd-commented"></i>
                                    <span>Commented on parties Tab</span>
                                  </div>
                                </div>
                                <div className="text-[#344054] text-[12px]">09:00</div>
                              </div>
                              <div className="text-[#344054] text-[12px] font-normal p-[8px] bg-[#F5F6F7] rounded-[8px]">changed the input name of employee from “Kalvin” to “Samston”.</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-[#000000] text-[12px] font-normal text-center py-2 separator">April 7h</div>
                          <div className="flex items-start justify-between gap-2 py-2">
                            <Image src="/assets/images/user3.svg" alt="user" width="32" height="32" />
                            <div className="">
                              <div className="flex justify-between">
                                <div>
                                  <div className="text-[#344054] font-semibold text-[14px]">Jennifer Lopez</div>
                                  <div className="text-[#667085] text-[10px] pb-2 pt-1">
                                    <i className="mr-1 gusd-commented"></i>
                                    <span>Commented on parties Tab</span>
                                  </div>
                                </div>
                                <div className="text-[#344054] text-[12px]">09:00</div>
                              </div>
                              <div className="text-[#344054] text-[12px] font-normal p-[8px] bg-[#F5F6F7] rounded-[8px]">changed the input name of employee from “Kalvin” to “Samston”.</div>
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-2 py-2">
                            <Image src="/assets/images/user4.svg" alt="user" width="32" height="32" />
                            <div className="">
                              <div className="flex justify-between">
                                <div>
                                  <div className="text-[#344054] font-semibold text-[14px]">Lethicia Jhansen</div>
                                  <div className="text-[#667085] text-[10px] pb-2 pt-1">
                                    <i className="mr-1 gusd-commented"></i>
                                    <span>Commented on parties Tab</span>
                                  </div>
                                </div>
                                <div className="text-[#344054] text-[12px]">09:00</div>
                              </div>
                              <div className="text-[#344054] text-[12px] font-normal p-[8px] bg-[#F5F6F7] rounded-[8px]">changed the input name of employee from “Kalvin” to “Samston”.</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-[#000000] text-[12px] font-normal text-center py-2 separator">April 7h</div>
                          <div className="flex items-start justify-between gap-2 py-2">
                            <Image src="/assets/images/user5.svg" alt="user" width="32" height="32" />
                            <div className="">
                              <div className="flex justify-between">
                                <div>
                                  <div className="text-[#344054] font-semibold text-[14px]">Jhon Doe</div>
                                  <div className="text-[#667085] text-[10px] pb-2 pt-1">
                                    <i className="mr-1 gusd-commented"></i>
                                    <span>Commented on parties Tab</span>
                                  </div>
                                </div>
                                <div className="text-[#344054] text-[12px]">09:00</div>
                              </div>
                              <div className="text-[#344054] text-[12px] font-normal p-[8px] bg-[#F5F6F7] rounded-[8px]">changed the input name of employee from “Kalvin” to “Samston”.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog >

                            </div>

                            <Sidebar visible={visibleRight} position="right" onHide={() =>
                                setVisibleRight(false)} style={{ width: '35vw' }} className="customesidebar1">
                                <Editpopup popupstate={() => setVisibleRight(false)} />

                            </Sidebar>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}