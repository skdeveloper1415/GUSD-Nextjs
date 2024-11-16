import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import { Dropdown } from 'primereact/dropdown';


export default function index() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleRight1, setVisibleRight1] = useState(false);
    const [visibleRight2, setVisibleRight2] = useState(false);
    const [visibleRight3, setVisibleRight3] = useState(false);
    const [position, setPosition] = useState('center');
    const [selectedCity, setSelectedCity] = useState(null);
    const options = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const basiccard =
        [
            {
                id: '1',
                name: 'Team Member',
                user: '52',
                access: '',
                action: 'David',
            },
            {
                id: '2',
                name: 'Approver',
                user: '4',
                access: '',
                action: 'Kalvin',
            },
            {
                id: '3',
                name: 'Initiator',
                user: '10',
                access: '',
                action: 'Samstom',
            }
    ];
    const roleaccess =
        [
            {
                id: '1',
                name: 'Team Member',
                user: '52',
                access: '',
                action: 'David',
            },
            {
                id: '2',
                name: 'Approver',
                user: '4',
                access: '',
                action: 'Kalvin',
            },
            {
                id: '3',
                name: 'Initiator',
                user: '10',
                access: '',
                action: 'Samstom',
            }
    ];
    const rolegroups =
        [
            {
                id: '1',
                name: 'Group 1',
                members: '4',
                access: '',
                action: '',
            },
            {
                id: '2',
                name: 'Group 2',
                members: '5',
                access: '',
                action: '',
            },
            {
                id: '3',
                name: 'Group 3',
                members: '10',
                access: '',
                action: '',
            }
    ];
    const managemembers =
        [
            {
                id: '1',
                name: 'andre@gmail.com',
                schools: 'Kayle Elem',
                type: 'Document Translation',
                access: '',
                action: '',
            },
            {
                id: '2',
                name: 'andre@gmail.com',
                schools: 'Chandler Elem',
                type: 'Meeting Request',
                access: '',
                action: '',
            },
            {
                id: '3',
                name: 'andre@gmail.com',
                schools: 'Christen Middle',
                type: 'Phone Call Request',
                access: '',
                action: '',
            }
    ];
    const addmembers =
        [
            {
                id: '1',
                name: 'andre@gmail.com',
                schools: 'Kayle Elem',
                type: 'Document Translation',
                access: '',
                action: '',
            },
            {
                id: '2',
                name: 'andre@gmail.com',
                schools: 'Chandler Elem',
                type: 'Meeting Request',
                access: '',
                action: '',
            },
            {
                id: '3',
                name: 'andre@gmail.com',
                schools: 'Christen Middle',
                type: 'Phone Call Request',
                access: '',
                action: '',
            }
    ];
    const accessmembers =
        [
            {
                id: '1',
                module: 'Manage Request',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '2',
                module: 'View Calendar',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '3',
                module: 'Customize Initiator Form',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '4',
                module: 'Form Initiation',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '5',
                module: 'Form Approval',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '6',
                module: 'View Reports',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '7',
                module: 'Immediate Action Items/Reminders',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '8',
                module: 'Manage Users',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '9',
                module: 'Manage Role',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '10',
                module: 'Mange Initiators',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '11',
                module: 'Manage Masters',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
            {
                id: '12',
                module: 'Messaging',
                view: '',
                add: '',
                edit: '',
                delete: '',
            },
    ];

    const alljobactionContent = () => {
        return (

            <div className="flex justify-start w-full gap-2">
                <Link href='#' className="py-2 px-5 text-[#344054] bg-[#fff] text-sm border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]" onClick={() => setVisibleRight(true)}>Manage Members</Link>
            </div>
        );
    };
    const roleaccessactionContent = () => {
        return (

            <div className="flex justify-start w-full gap-2">
                <Link href='#' className="py-2 px-5 bg-[#fff] text-[#344054] text-sm border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]" onClick={() => setVisibleRight2(true)}>Manage Members</Link>
            </div>
        );
    };
    const groupactionContent = () => {
        return (
            <div className="flex justify-start w-full gap-2">
                <Link href='#' className="py-2 px-5 bg-[#fff] text-[#344054] text-sm border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]" onClick={() => setVisibleRight3(true)}>View Groups</Link>
            </div>
        );
    };
    const editmember = () => {
        return (
            <div className="flex justify-start w-full gap-2">
                <Link href='#' className="py-2 px-5 text-[#344054] text-sm border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">Edit</Link>
            </div>
        );
    };
    const editaddmember = () => {
        return (
            <div className="flex justify-start w-full gap-2">
                <Link href='#' className="py-2 px-5 text-[#344054] text-sm border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">Edit</Link>
            </div>
        );
    };
    const mappedreqtype = () => {
        return (
            <div className="flex justify-start w-full gap-2 select-styling">
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" placeholder="--Select--" className="w-full " />
            </div>
        );
    };
    const userbody = () => {
        return (
            <div className="flex justify-start w-full gap-2 select-styling">
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" placeholder="--Select--" className="w-full " />
            </div>
        );
    };
    const mappedschools = () => {
        return (
            <div className="flex justify-start w-full gap-2 select-styling">
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" placeholder="--Select--" className="w-full " />
            </div>
        );
    };

    const [selectedProducts, setSelectedProducts] = useState(null);
    return (
        <>
            <Layout pageTitle="Users Management">
                <div className="pt-10">
                    <div className="roletabs relative">
                        <div className="flex items-center gap-4 justify-end absolute z-10 right-0 py-1">
                            <div className="xl:w-[15.058vw] md:w-[200px]">
                                <span className="w-full p-input-icon-left">
                                    <i className="gusd-search text-[#667085] top-3" />
                                    <InputText placeholder="Search" className="w-full placeholder:text-[#667085] radius8" />
                                </span>
                            </div>
                            <Link href='' className="w-auto text-center tableBtn blue radius8">Create Role</Link>
                        </div>
                        <TabView>
                            <TabPanel header="Roles">
                                <div className="flex gap-2 py-5 px-4 items-center">
                                    <div className="text-[#101828] font-medium text-lg">Roles</div>
                                    <Tag severity="" value="3 Roles" style={{ background: '#EFF8FF', color: '#0487C8', fontSize: 11, fontWeight: 500, padding: '0px 15px', height: 20 }} rounded></Tag>
                                </div>
                                <div className="roletbl">
                                    <DataTable value={basiccard} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                                        <Column field="name" header="Role name" sortable style={{ width: '30rem' }} ></Column>
                                        <Column field="user" header="User" sortable style={{ width: '20rem' }} ></Column>
                                        <Column field="access" header="Lock Access" sortable selectionMode="multiple" style={{ width: '20rem' }}></Column>
                                        <Column field="action" header="Action" sortable body={alljobactionContent}></Column>
                                    </DataTable>
                                </div>
                            </TabPanel>
                            <TabPanel header="Role Access">
                                <div className="flex gap-2 py-5 px-4">
                                    <div className="text-[#101828] font-medium text-lg">Manage Access</div>
                                    <Tag severity="" value="3 Roles" style={{ background: '#EFF8FF', color: '#0487C8' }} rounded></Tag>
                                </div>
                                <div className="roletbl">
                                    <DataTable value={roleaccess} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                                        <Column field="name" header="Role name" sortable style={{ width: '30rem' }}></Column>
                                        <Column field="user" header="User" sortable style={{ width: '20rem' }}></Column>
                                        <Column field="access" header="Lock Access" sortable selectionMode="multiple" style={{ width: '20rem' }}></Column>
                                        <Column field="action" header="Action" sortable body={roleaccessactionContent}></Column>
                                    </DataTable>
                                </div>
                            </TabPanel>
                            <TabPanel header="Groups">
                                <div className="flex gap-2 py-5 px-4">
                                    <div className="text-[#101828] font-medium text-lg">Groups</div>
                                    <Tag severity="" value="3 Roles" style={{ background: '#EFF8FF', color: '#0487C8' }} rounded></Tag>
                                </div>
                                <div className="roletbl">
                                    <DataTable value={rolegroups} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                                        <Column field="name" header="Group name" sortable style={{ width: '30rem' }}></Column>
                                        <Column field="members" header="Assigned Members" sortable style={{ width: '20rem' }}></Column>
                                        <Column field="access" header="Lock Access" sortable selectionMode="multiple" style={{ width: '20rem' }}></Column>
                                        <Column field="action" header="Action" sortable body={groupactionContent}></Column>
                                    </DataTable>
                                </div>
                            </TabPanel>
                        </TabView>

                        <Dialog className="relative reports-popup" visible={visibleRight} position="right" style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setVisibleRight(false)} draggable={false} resizable={false}>
                            <div className="">
                                <div className="bg-[#F5F6F7] h-screen">
                                    <div className="p-5">
                                        <a href='' onClick={() => setVisibleRight(false)} className="py-3"><Image src="/assets/images/sidebarright.svg" alt="user" width="24" height="24" /></a>
                                        <div className="text-[#113699] text-md md:text-[0.833vw] font-bold">Manage Members</div>
                                        <div className="text-[#344054] text-xs lg:text-[0.625vw] font-medium">Roles</div>
                                        <div className="py-3 roletbl mt-2">
                                            <DataTable value={managemembers} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                                                <Column field="name" header="User name"></Column>
                                                <Column field="schools" header="Mapped Schools"></Column>
                                                <Column field="type" header="Mapped Request Type"></Column>
                                                <Column field="acccess" header="Lock Access" selectionMode="multiple"></Column>
                                                <Column field="action" header="Action" body={editmember}></Column>
                                            </DataTable>
                                        </div>
                                    </div>
                                    <div className="absolute right-5 bottom-5 flex justify-end gap-2">
                                        <Link href='#' onClick={() => setVisibleRight1(true)} className="bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] font-medium text-[#344054] flex items-center text-xs py-[6px] px-[10px] rounded-[8px] justify-center">Add Member</Link>
                                        <Link href='' className="w-20 text-center flex items-center tableBtn blue radius8">Save</Link>
                                    </div>
                                </div>
                            </div>
                        </Dialog >

                        <Dialog className="relative reports-popup" visible={visibleRight1} position="right" style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setVisibleRight1(false)} draggable={false} resizable={false}>
                            <div className="">
                                <div className="bg-[#F5F6F7] h-screen">
                                    <div className="p-5">
                                        <a href='' onClick={() => setVisibleRight1(false)} className="py-3"><Image src="/assets/images/sidebarright.svg" alt="user" width="24" height="24" /></a>
                                        <div className="text-[#113699] text-md md:text-[0.833vw] font-bold">Add Members</div>
                                        <div className="text-[#344054] text-xs lg:text-[0.625vw] font-medium">Roles</div>
                                        <div className="py-3 roletbl mt-2">
                                            <DataTable value={addmembers} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                                                <Column field="name" body={userbody} header="User name"></Column>
                                                <Column field="schools" body={mappedschools} header="Mapped Schools"></Column>
                                                <Column field="type" body={mappedreqtype} header="Mapped Request Type"></Column>
                                                <Column field="acccess" header="Lock Access" selectionMode="multiple"></Column>
                                                <Column field="action" header="Action" body={editaddmember}></Column>
                                            </DataTable>
                                        </div>
                                    </div>
                                    <div className="absolute right-5 bottom-5 flex justify-end gap-2">
                                        <Link href='' onClick={() => setVisibleRight1(true)} className="w-20 text-center flex items-center tableBtn blue radius8">Save</Link>
                                    </div>
                                </div>
                            </div>
                        </Dialog>

                        <Dialog className="relative reports-popup" visible={visibleRight2} position="right" style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setVisibleRight2(false)} draggable={false} resizable={false}>
                            <div className="">
                                <div className="bg-[#F5F6F7] h-screen">
                                    <div className="p-5">
                                        <a href='' onClick={() => setVisibleRight2(false)} className="py-3"><Image src="/assets/images/sidebarright.svg" alt="user" width="24" height="24" /></a>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="text-[#113699] text-md md:text-[0.833vw] font-bold">Manage Members</div>
                                                <div className="text-[#344054] text-xs lg:text-[0.625vw] font-medium">Roles</div>
                                            </div>
                                            <div className="select-styling">
                                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" placeholder="Initiator" className="w-full" />
                                            </div>
                                        </div>

                                        <div className="py-3 roletbl mt-2">
                                            <DataTable value={accessmembers} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                                                <Column field="module" header="Module"></Column>
                                                <Column field="view" header="View" selectionMode="multiple"></Column>
                                                <Column field="add" header="Add" selectionMode="multiple"></Column>
                                                <Column field="edit" header="Edit" selectionMode="multiple"></Column>
                                                <Column field="delete" header="Delete" selectionMode="multiple"></Column>
                                            </DataTable>
                                        </div>
                                    </div>
                                    <div className="absolute right-5 bottom-5 flex justify-end gap-2">
                                        <Link href='' className="w-20 text-center flex items-center tableBtn blue radius8">Save</Link>
                                    </div>
                                </div>
                            </div>

                        </Dialog >

                        <Dialog className="relative reports-popup" visible={visibleRight3} position="right" style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setVisibleRight3(false)} draggable={false} resizable={false}>
                            <div className="">
                                <div className="bg-[#F5F6F7] h-screen">
                                    <div className="p-5">
                                        <a href='' onClick={() => setVisibleRight3(false)} className="py-3"><Image src="/assets/images/sidebarright.svg" alt="user" width="24" height="24" /></a>
                                        <div className="text-[#113699] text-md md:text-[0.833vw] font-bold">Create Group</div>
                                        <div className="text-[#344054] text-xs lg:text-[0.625vw] font-medium">Roles</div>
                                        <div className="py-3 bg-white px-5 rounded-[8px] mt-3">
                                            <div className="mb-1">
                                                <label className="text-[#344054] text-[0.729vw] font-medium pb-1" htmlFor="username">Group name</label>
                                                <div><InputText id="username" placeholder="Type Here" className="w-full placeholder:text-[#667085] " aria-describedby="username-help" /></div>
                                            </div>
                                            <div className="select-styling my-1">
                                                <label className="text-[#344054] text-[0.729vw] font-medium pb-1" htmlFor="">Role</label>
                                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" placeholder="Approver" className="w-full" />
                                            </div>
                                            <div className="select-styling my-1">
                                                <label className="text-[#344054] text-[0.729vw] font-medium pb-1" htmlFor="">Select User</label>
                                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" placeholder="All" className="w-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-5 bottom-5 flex justify-end gap-2">
                                        <Link href='#' className="bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] font-medium text-[#344054] flex items-center text-xs py-[6px] px-[10px] rounded-[8px] justify-center w-20">Cancel</Link>
                                        <Link href='' className="w-32 text-center flex items-center tableBtn blue radius8">Create Group</Link>
                                    </div>
                                </div>
                            </div>
                        </Dialog>

                    </div>
                </div>
            </Layout>
        </>
    );
}