import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import Layout from '@/components/layout/layout';
import { AdminUsersManagement } from '@/service/AdminUsersManagement';
import Link from 'next/link';
import { Sidebar } from 'primereact/sidebar';

export default function CustomersDemo() {
  const [adminUsersManagement, setAdminUsersManagement] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState()
  const [visibleRight, setVisibleRight] = useState(false);
  const status = [
    { name: 'Confirmed', code: 'NY' },
    { name: 'Unconfirmed', code: 'RM' },
  ];
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    role: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    lastNames: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
  });

  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [representatives] = useState([
    { name: 'Amod ', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
  ]);
  const [statuses] = useState(['Unconfirmed', 'Confirmed']);

  const getSeverity = (status) => {
    switch (status) {
      case 'Unconfirmed':
        return 'danger';

      case 'Confirmed':
        return 'success';
    }
  };

  useEffect(() => {
    AdminUsersManagement.getAdminUsersManagementLarge().then((data) => setAdminUsersManagement(getAdminUsersManagement(data)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getAdminUsersManagement = (data) => {
    return [...(data || [])].map((d) => {
      d.date = new Date(d.date);

      return d;
    });
  };

  const formatDate = (value) => {
    const day = value.getDate().toString().padStart(2, '0');
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const year = value.getFullYear();
    const hour = value.getHours();
    const minute = value.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${day}/${month}/${year}, ${formattedHour}:${minute} ${ampm}`;
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-between align-items-center bg-[#FFFFFF]">
        <div className='space-x-2'>
            <h4 className="m-0 text-[18px] inline-block text-[#101828] font-medium trackint-[-0.02em]">Users</h4>
            <span className="text-[12px] text-[#0487C8] inline-block font-medium bg-[#EFF8FF] px-1 h-[20px] rounded-lg">100 Roles</span>
        </div>
        <div className='flex justify-end'>
           <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" placeholder="Status" className="w-[217px] h-11 rounded-md border border-[#E4E7EC] pl-5" style={{ fontSize: '0.875rem', color:'#667085', fontWeight:'400' }} />
        </div>
      </div>
    );
  };


  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
      <div className="flex align-items-center gap-2">
        <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
        <span>{representative.name}</span>
      </div>
    );
  };

  const representativeFilterTemplate = (options) => {
    return (
      <React.Fragment>
        <div className="mb-3 font-bold">Agent Picker</div>
        <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
      </React.Fragment>
    );
  };

  const representativesItemTemplate = (option) => {
    return (
      <div className="flex align-items-center gap-2">
        <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
        <span>{option.name}</span>
      </div>
    );
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.date);
  };

  const dateFilterTemplate = (options) => {
    return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
  };


  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
  };

  const statusFilterTemplate = (options) => {
    return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
  };

  const statusItemTemplate = (option) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };



  const activityFilterTemplate = (options) => {
    return (
      <>
        <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
        <div className="flex align-items-center justify-content-between px-2">
          <span>{options.value ? options.value[0] : 0}</span>
          <span>{options.value ? options.value[1] : 100}</span>
        </div>
      </>
    );
  };

  const actionBodyTemplate = () => {
    return <div className='flex gap-5'>
      <Link href={''} ><p className='gusd-security-user text-[14px]'></p></Link>
      <Link href={''} ><p className='gusd-key-square text-[14px]'></p></Link>
      <Link href={''} ><p className='gusd-delete text-[14px]'></p></Link>
    </div>
  };

  const header = renderHeader();

  return (
    <Layout pageTitle="Users Managment">
      <div className='pt-24 md:pt-28 xl:pt-[2.083vw]'>


        <div className='flex justify-end gap-2 xl:gap-[0.990vw] py-2 items-center'>
          <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} className='inputSearch' onChange={onGlobalFilterChange} placeholder="Search" />
            </span>
          </div>
          <Link href='' className="newBnt" onClick={() => setVisibleRight(true)}> Create New</Link>
        </div>

        <div className="card custHeader custpaginator custIcons custmBtnTable custTable">
          <DataTable value={adminUsersManagement} paginator header={header} rows={10} className="custpaginator custIcons custmBtnTable custTable custHeader"
            paginatorTemplate="PrevPageLink PageLinks NextPageLink"
            rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)}
            filters={filters} filterDisplay="menu" globalFilterFields={['name', 'country.name', 'representative.name', 'status']}
            emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
           
            <Column field="role" header="Role" sortable filter filterPlaceholder="Search by role" style={{ minWidth: '14rem' }} />
            <Column header="First Name" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }}
              style={{ minWidth: '14rem' }} body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
            <Column field="lastName" header="Last Name" sortable filter filterPlaceholder="Search by lastName" style={{ minWidth: '14rem' }} />
            <Column field="email" header="Email" sortable filterField="email"  style={{ minWidth: '12rem' }}  />
            <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
            <Column field="date" header="Created" sortable filterField="date" dataType="date" style={{ minWidth: '12rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
            <Column field="activity" header="Activity"  showFilterMatchModes={false} style={{ minWidth: '5rem' }} body={actionBodyTemplate} filter filterElement={activityFilterTemplate} />
            <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }}  />
          </DataTable>
        </div>
      </div>
      <div className="masterpopup">
                  <Sidebar visible={visibleRight} position="right" onHide={() =>
                     setVisibleRight(false)} className="customesidebar1 masterpopup w-full xl:w-[50vw]">

                     <div className="bg-[#F5F6F7] h-full relative  p-5">
                        <div className="pb-4">
                           <button onClick={() => setVisibleRight(false)}> <i className='gusd-close-sidebar text-black ' style={{ fontSize: 20 }}></i>
                           </button>
                        </div>
                        <div className="">
                           <div className="text-[#113699] text-[16px] xl:text-[0.938vw] font-semibold leading-4">Create New User</div>
                           <div className="text-[#344054] text-[12px] xl:text-[0.729vw] font-light leading-4">User</div>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-lg'>
                          <div className='mt-5'>
                            <div className='px-4 py-4 space-y-3'>
                            <div className=''>
                              <div className='text-[#344054] text-[14px] font-medium pb-1'>Role</div>
                              <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" placeholder="--Select--" className="w-full rounded-lg h-10 border border-[#E4E7EC]" />
                              </div>
                              <div className='grid grid-cols-2 gap-4'>
                                  <div className=''>
                                      <div className='text-[14px] text-[#344054] font-medium pb-1'>First Name</div>
                                      <InputText placeholder="Type Here" className="w-full text-[16px] text-[#667085]" />
                                  </div>
                                  <div className=''>
                                    <div className='text-[14px] text-[#344054] font-medium pb-1 '>Last Name</div>
                                    <InputText placeholder="Type Here" className="w-full radius8 text-[16px] text-[#667085]" />
                                  </div>
                              </div>
                              <div className=''>
                                    <div className='text-[14px] text-[#344054] font-medium pb-1 '>Email</div>
                                    <InputText placeholder="Type Here" className="w-full radius8 text-[16px] text-[#667085]" />
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className='lg:absolute left-0 right-0 bottom-0 px-4 py-5 text-right'>
                           <Link href="" className="cancelBtnbottom radius8 mr-3">Add New</Link>
                           <Link href="" className="custmBtnbottom blue radius8" onClick={() => setVisibleRight(false)}>Save</Link>
                        </div>
                     </div>
                  </Sidebar>
       </div>
      {/* <div className="masterpopup">
                  <Sidebar visible={visibleRight} position="right" onHide={() =>
                     setVisibleRight(false)} className="customesidebar1 masterpopup w-full">

                     <div className="bg-[#F5F6F7] h-full relative  p-5">
                        <div className="pb-4">
                           <button onClick={() => setVisibleRight(false)}> <i className='gusd-close-sidebar text-black ' style={{ fontSize: 20 }}></i>
                           </button>
                        </div>
                        <div className="">
                           <div className="text-[#113699] text-[16px] xl:text-[0.938vw] font-semibold leading-4">Create Group</div>
                           <div className="text-[#344054] text-[12px] xl:text-[0.729vw] font-light leading-4">Roles</div>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-lg'>
                          <div className='mt-5'>
                            <div className='px-4 py-4 space-y-3'>
                            <div className=''>
                                      <div className='text-[14px] text-[#344054] font-medium pb-1'>Group name</div>
                                      <InputText placeholder="Type Here" className="w-full text-[16px] text-[#667085]" />
                                  </div>
                              <div className=''>
                              <div className='text-[#344054] text-[14px] font-medium pb-1'>Role</div>
                              <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" placeholder="Approver" className="w-full rounded-lg h-10 border border-[#E4E7EC]" />
                              </div>
                              <div className=''>
                              <div className='text-[#344054] text-[14px] font-medium pb-1'>Select User</div>
                              <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" placeholder="All" className="w-full rounded-lg h-10 border border-[#E4E7EC]" />
                              </div>
                              </div>
                          </div>
                        </div>
                        <div className='lg:absolute left-0 right-0 bottom-0 px-4 py-5 text-right'>
                           <Link href="" className="cancelBtnbottom radius8 mr-3">Cancel</Link>
                           <Link href="" className="custmBtnbottom blue radius8" onClick={() => setVisibleRight(false)}>Create Group</Link>
                        </div>
                     </div>
                  </Sidebar>
       </div> */}
    </Layout>
  );
}
