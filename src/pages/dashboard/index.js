import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/layout";
import { Inter } from '@next/font/google'
import Image from "next/image";
import Link from 'next/link';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import ReactEcharts from "echarts-for-react";
import echarts, { graphic } from 'echarts';
import { color } from 'echarts';

const myinter = Inter({
   weight: ['300', '400', '500', '600', '700', '800'],
   subsets: ['latin'],
   display: 'swap'
})

const TotalUserRoles = {
   top: "-5%",
   legend: {
      orient: 'vertical',
      right: 'right',
      top: 50,
      right: -5,
      itemWidth: 8,
      itemHeight: 8,
      color: '#4C525F99',
      textStyle: {
         color: "#4C525F99",
         fontSize: 10
       }
      // data: ['dfga', 'gdf', 'sdf']
   },
   graphic: {
      elements: [
         {
            type: "image",
            style: {
               image: "/assets/images/briefcase.svg",
               width: 25,
               height: 25,
               shape: {
                  x: 0,
                  y: 0,
                  width: 30,
                  height: 30,
                  r: 2, // Border radius
                  stroke: "#ffff", // Border color
                  lineWidth: 1, // Border width
               },
            },

            left: "center",
            top: "52%",
            left: "35%"
         },
      ],
   },
   label: {
      fontStyle: "light",
      fontSize: 12,
      formatter: '{c}%'
   },
   series: [
      {
         name: 'TotalUserRoles',
         type: 'pie',
         radius: [40, 54],
         center: ['40%', '60%'],
         data: [
            {

               value: 12,
               name: 'Payroll',
               itemStyle: {
                  color: '#3366FF',
                  FontSize: '10px'
               },


            },
            {
               value: 18,
               name: 'Initiator',
               itemStyle: {
                  color: '#99B2FF',
                  FontSize: '10px'

               },
            },
            {
               value: 70,
               name: 'Approvers',
               itemStyle: {
                  color: '#EAEFFF',
                  FontSize: '12px'
               },

            },

         ]
      }
   ]
};

const UserGroup = {
   top: "0%",
   legend: {
      top: "20%",
      orient: "horizontal",
      align: "left",
      right: 0,
      width: "50%",
      itemWidth: 8,
      itemHeight: 8,
      color: 'rgba(76, 82, 95, 0.6)',
      textStyle: {
         color: "#4C525F99",
         fontSize: 10
       }
      // data: ['dfga', 'gdf', 'sdf']
   },
   graphic: {
      elements: [
         {
            type: "image",
            style: {
               image: "/assets/images/colorfilter.svg",
               width: 30,
               height: 30,
               shape: {
                  x: 0,
                  y: 0,
                  width: 30,
                  height: 30,
                  r: 2, // Border radius
                  stroke: "#ffff", // Border color
                  lineWidth: 1, // Border width
               },
            },

            left: "center",
            top: "52%",
            left: "26%"
         },
      ],
   },
   label: {
      fontStyle: "light",
      fontSize: 12,
      formatter: '{c}%'
   },
   series: [
      {
         name: 'TotalUserRoles',
         type: 'pie',
         radius: [40, 54],
         center: ['30%', '60%'],
         data: [
            {
               value: 26,
               name: 'Group 1 (26)',
               itemStyle: {
                  color: '#EAEFFF',
                  FontSize: '12px'
               },

            },
            {
               value: 15,
               name: 'Group 2 (34)',
               itemStyle: {
                  color: '#C1D1FF',
                  FontSize: '10px'
               },
            },
            {
               value: 21,
               name: 'Group 3 (40)',
               itemStyle: {
                  color: '#7093FF',
                  FontSize: '10px'

               },
            },
            {
               value: 18,
               name: 'Group 4 (30)',
               itemStyle: {
                  color: '#2D5BE5',
                  FontSize: '10px'

               },
            },
            {
               value: 12,
               name: 'Group 5 (48)',
               itemStyle: {
                  color: '#19337F',
                  FontSize: '10px'

               },
            },


         ]
      }
   ]
};

//AbsenceSummary line chart
const AbsenceSummary = {
   legend: {
      data: ['Absence Requests', 'Approved'],
      bottom: 0,
      orient: "horizontal",
      align: "left",
      left: 0,
      width: "100%",
      itemWidth: 8,
      itemHeight: 8,
      color: 'rgba(76, 82, 95, 0.6)',
      textStyle: {
         color: "#4C525F99",
         fontSize: 10
       }
   },
   xAxis: {
      type: 'category',
      data: ['Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
      axisLabel: {
         interval: 0,
         fontSize: 10,
         color: '#4C525F99',
       },
         
      
      axisLine: {
         show: false
      },
      axisTick: {
         show: false
      }
   },
   grid: {
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '20%',
      containLabel: true,

   },
   yAxis: {
      type: 'value',
      show: false
   },
   series: [
      {
         name:'Approved',
         data: [10, 20, 15, 23, 25],
         type: 'line',
         itemStyle: {
            color: '#3366FF'
         },
         areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
               {
                  offset: 0,
                  // color: '#33CC80'
                  color: 'rgba(51, 102, 255, 0.2)'

               },
               {
                  offset: 1,
                  // color: '#FFFFFF'
                  color: 'rgba(229, 241, 232, 0)'
               }])
         },
      },
      {
         name:'Absence Requests',
         data: [12, 22, 16, 25, 29],

         type: 'line',
         itemStyle: {
            color: '#FEC84B'
         },

      }
   ]
};


export default function index() {

   const dashboardClass = 'darkHeader';
   const [visibleRight, setVisibleRight] = useState(false);
   const [selectedStatus, setSelectedStatus] = useState()
   const status = [
      { name: 'Confirmed', code: 'NY' },
      { name: 'Unconfirmed', code: 'RM' },
    ];
   

   useEffect(() => {
      document.body.className = 'darkHeader';
      return () => { document.body.className = ''; }
   });

   return (
      <>
         <Layout pageTitle="Dashboard">
            <div className={myinter.className}>
               <div className={`dashboard_bg ${dashboardClass}`}>
                  <div className='mt-[45px] xl:mt-[2.344vw]'>
                     <div className='text-[#FAFBFF] text-[] xl:text-[1.875vw]' data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">Welcome <span className='font-semibold'>Johan Smith!</span></div>
                     <div className='mt-[36] xl:mt-[1.875vw]'>
                        <div className='flex items-center flex-wrap gap-[12px] xl:gap-[0.625vw]'>
                           <div className='' data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                              <Link href={""} className="flex flex-col items-center justify-center bg-white rounded-[8px] xl:rounded-[0.417vw] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)] space-y-[20px] xl:space-y-[1.042vw] w-[130px] xl:w-[6.771vw] h-[112px] xl:h-[5.833vw]">
                                 <div><Image src={"/assets/images/user_icon.svg"} width={"48"} height={"48"} className='mx-auto xl:w-[2.500vw] xl:h-[2.500vw]' /></div>
                                 <div className='text-[16px] xl:text-[0.833vw] text-[#101828] font-medium'>User Mgt</div>
                              </Link>
                           </div>
                           <div className='' data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
                              <Link href={""} className="flex flex-col items-center justify-center bg-white rounded-[8px] xl:rounded-[0.417vw] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)] space-y-[20px] xl:space-y-[1.042vw] w-[130px] xl:w-[6.771vw] h-[112px] xl:h-[5.833vw]">
                                 <div><Image src={"/assets/images/other_icon.svg"} width={"48"} height={"48"} className='mx-auto xl:w-[2.500vw] xl:h-[2.500vw]' /></div>
                                 <div className='text-[16px] xl:text-[0.833vw] text-[#101828] font-medium'>Role Mgt</div>
                              </Link>
                           </div>
                           <div className='' data-aos="fade-up" data-aos-duration="900" data-aos-delay="700">
                              <Link href={""} className="flex flex-col items-center justify-center bg-white rounded-[8px] xl:rounded-[0.417vw] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)] space-y-[20px] xl:space-y-[1.042vw] w-[130px] xl:w-[6.771vw] h-[112px] xl:h-[5.833vw]">
                                 <div><Image src={"/assets/images/master_icon.svg"} width={"48"} height={"48"} className='mx-auto xl:w-[2.500vw] xl:h-[2.500vw]' /></div>
                                 <div className='text-[16px] xl:text-[0.833vw] text-[#101828] font-medium'>Masters</div>
                              </Link>
                           </div>
                           <div className='' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                              <Link href={""} className="flex flex-col items-center justify-center bg-white rounded-[8px] xl:rounded-[0.417vw] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)] space-y-[20px] xl:space-y-[1.042vw] w-[130px] xl:w-[6.771vw] h-[112px] xl:h-[5.833vw]">
                                 <div><Image src={"/assets/images/other_icon.svg"} width={"48"} height={"48"} className='mx-auto xl:w-[2.500vw] xl:h-[2.500vw]' /></div>
                                 <div className='text-[16px] xl:text-[0.833vw] text-[#101828] font-medium'>Other</div>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='mt-[89px] xl:mt-[2.635vw] pb-1'>
                     <div className='flex justify-between items-center'>
                        <div className='text-[20px] xl:text-[1.042vw] text-blue-600 sm:text-[#FAFBFF] font-medium pageTitle'>Users Overview</div>
                        <div>
                           <div class="flex gap-2">
                           <Link href={'JavaScript:void(0)'} class="space-x-2 flex items-center bg-[#4775FF] text-[#fff] lg:py-[0.625vw] lg:px-[0.833vw] py-2 px-2 rounded-lg font-medium text-xs lg:text-[0.833vw]" onClick={() => setVisibleRight(true)}>New Group</Link>
                           <Link href={'JavaScript:void(0)'} class="space-x-2 flex items-center bg-[#19337F] text-white lg:py-[0.521vw] lg:px-[0.938vw] py-2 px-2 rounded-lg font-medium text-xs lg:text-[0.833vw]" onClick={() => setVisibleRight(true)}>New User</Link>
                        </div>
                        </div>
                     </div>
                     <div className='mt-[34px] xl:mt-[1.771vw]'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[1.207vw]'>
                           <div className='bg-white rounded-[16px] xl:rounded-[0.833vw] shadow-[4px_0px_64px_rgba(0,0,0,0.08)] overflow-hidden'>
                              <div className='bg-[#F5F9FA] text-[#293141] xl:text-[0.838vw] text-[15px] px-[20px] 
                              xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] font-semibold'>
                                 Total Users & Roles</div>
                              <div className='p-[20px] xl:p-[1.042vw]'>

                                 <div className='flex items-center justify-between gap-2'>
                                    <div className='border-r border-[#D8D8D8]'>
                                       <div className='flex gap-2 items-center xl:mb-[0.503vw] mb-2'>
                                          <h5 className='text-[#4C525F] xl:text-[1.875vw] text-[32px]  font-medium'>125</h5>
                                       </div>
                                       <div className='flex gap-2 items-center xl:mb-[0.503vw] mb-2'>
                                          <i class="gusd-arrow-line-up-circle text-[#3366FF] text-[18px]"></i>
                                          <h6 className='text-[#4C525F] xl:text-[0.833vw] text-[16px]  font-normal'>12% increase YoY</h6>
                                       </div>
                                    </div>
                                    <div className='TotalUserRoles w-full h-40'>
                                       <ReactEcharts option={TotalUserRoles} style={{ height: '100%', width: '100%', }} />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className='bg-white rounded-[16px] xl:rounded-[0.833vw] shadow-[4px_0px_64px_rgba(0,0,0,0.08)] overflow-hidden'>
                              <div className='bg-[#F5F9FA] text-[#293141] xl:text-[0.838vw] text-[15px] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] font-semibold'>User Groups</div>
                              <div className='p-[20px] xl:p-[1.042vw]'>

                                 <div className='w-full h-40'>

                                    <ReactEcharts option={UserGroup} style={{ height: '100%', width: '100%', }} />


                                 </div>
                              </div>
                           </div>
                           <div className='bg-white rounded-[16px] xl:rounded-[0.833vw] shadow-[4px_0px_64px_rgba(0,0,0,0.08)] overflow-hidden'>
                              <div className='flex items-center justify-between bg-[#F5F9FA]'>
                                 <div className='bg-[#F5F9FA] text-[#293141] xl:text-[0.838vw] text-[15px] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] font-semibold'>Absence Summary</div>
                                       <div className='flex px-[20px] xl:px-[1.042vw]'>
                                             <label for="cars" className='text-[#4C525F] font-semibold mr-2 text-xs xl:text-[0.638vw]'>by </label>

                                             <select name="cars" id="cars" className='text-[#999999] text-xs xl:text-[0.638vw] bg-[#F5F9FA]'>
                                                   <option value="volvo">Week</option>
                                                   <option value="saab">Month</option>
                                                   <option value="mercedes">Quarter</option>
                                             </select>
                                       </div>
                              </div>
                              <div className='p-[20px] xl:p-[1.042vw]'>

                                 <div className='grid grid-cols-12 mt-2 gap-2'>
                                    <div className='col-span-4 border-r border-[#D8D8D8]'>
                                       <div className='text-[rgba(76,82,   95,0.6)] xl:text-[0.625vw] text-[12px]  font-light xl:mb-[0.833vw] mb-3'>Weekly Approved Absence</div>
                                       <div className='flex gap-2 items-center my-2 xl:my-[0.833vw]'>
                                          <h5 className='text-[#4C525F] xl:text-[1.875vw] text-[32px]  font-medium'>365</h5>
                                       </div>
                                       <div className='flex gap-2 items-center'>

                                          <i class="gusd-arrow-line-up-circle text-[#3366FF] text-[20px]"></i>
                                          <h6 className='text-[rgba(76,82,   95,0.6)] xl:text-[0.833vw] text-[16px]  font-normal'>12% increase YoY</h6>
                                       </div>
                                    </div>
                                    <div className='col-span-8 TotalUserRoles'>
                                    <div className='w-full h-5 text-[rgba(76,82,   95,0.6)] xl:text-[0.625vw] text-[12px]  font-light xl:mb-[0.833vw] mb-2'>Week over week</div>
                                       <ReactEcharts option={AbsenceSummary} style={{ height: '100%', width: '100%', }} />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className='mt-[35px] xl:mt-[2.083vw] mb-10'>
                        <div className='text-[20px] xl:text-[1.042vw] text-[#333333] font-semibold pageTitle'>
                           Open requests</div>

                        <div className='mt-[24px] xl:mt-[1.250vw]'>
                           <div className='xl:p-[1.875vw] p-[32px] rounded-lg bg-[#111B30] dashboardshaddow'>
                              <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4'>
                                 <div className='bg-[#18233A] radius8 xl:p-[0.833vw] p-[16px] relative'>
                                    <div className='absolute right-2 -top-2'>
                                       <div className='bg-[#F6A000] text-[#101828] text-[10px] 
                                                   xl:text-[0.625vw] xl:px-[0.400vw] px-[6px]
                                                    xl:py-[0.401vw] py-[10px] rounded-full font-semibold leading-tight'> Awaiting Approval</div>
                                    </div>
                                    <div className='flex justify-between mt-3 mb-3 xl:mb-[1.200vw]'>
                                       <div className='flex gap-2 items-center'>
                                          <i className='gusd-calendar 
                                                   text-[#E5E8EF99] text-[14px]'></i>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> 03/29/2023</div>
                                       </div>
                                       <Link href=''><Image src="/assets/images/arrowright.svg" height={24} width={24} alt="" /></Link>

                                    </div>

                                    <div className='flex gap-3'>
                                       <Image src={"/assets/images/userImg.png"} width={"38"} height={"38"} className='rounded-full w-[38px] h-[38px] xl:w-[1.979vw] xl:h-[1.979vw]' />
                                       <div>
                                          <div className='text-[14px] xl:text-[0.781vw] 
                                                  text-[#fff] font-medium'> Esther Howard</div>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> ID: 165165165165156</div>
                                       </div>
                                    </div>
                                    <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#fff] font-light mt-2'> Request Type is a long text?</div>

                                 </div>
                                 <div className='bg-[#18233A] radius8 xl:p-[0.833vw] p-[16px] relative'>
                                    <div className='absolute right-2 -top-2'>
                                       <div className='bg-[#F6A000] text-[#101828] text-[10px] 
                                                   xl:text-[0.625vw] xl:px-[0.400vw] px-[6px]
                                                    xl:py-[0.401vw] py-[10px] rounded-full font-semibold leading-tight'> Awaiting Approval</div>
                                    </div>
                                    <div className='flex justify-between mt-3 mb-3 xl:mb-[1.200vw]'>
                                       <div className='flex gap-2 items-center'>
                                          <i className='gusd-calendar 
                                                   text-[#E5E8EF99] text-[14px]'></i>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> 03/29/2023</div>
                                       </div>
                                       <Link href=''><Image src="/assets/images/arrowright.svg" height={24} width={24} alt="" /></Link>

                                    </div>

                                    <div className='flex gap-3'>
                                       <Image src={"/assets/images/userImg.png"} width={"38"} height={"38"} className='rounded-full w-[38px] h-[38px] xl:w-[1.979vw] xl:h-[1.979vw]' />
                                       <div>
                                          <div className='text-[14px] xl:text-[0.781vw] 
                                                  text-[#fff] font-medium'> Esther Howard</div>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> ID: 165165165165156</div>
                                       </div>
                                    </div>
                                    <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#fff] font-light mt-2'> Request Type is a long text?</div>

                                 </div>
                                 <div className='bg-[#18233A] radius8 xl:p-[0.833vw] p-[16px] relative'>
                                    <div className='absolute right-2 -top-2'>
                                       <div className='bg-[#F6A000] text-[#101828] text-[10px] 
                                                   xl:text-[0.625vw] xl:px-[0.400vw] px-[6px]
                                                    xl:py-[0.401vw] py-[10px] rounded-full font-semibold leading-tight'> Awaiting Approval</div>
                                    </div>
                                    <div className='flex justify-between mt-3 mb-3 xl:mb-[1.200vw]'>
                                       <div className='flex gap-2 items-center'>
                                          <i className='gusd-calendar 
                                                   text-[#E5E8EF99] text-[14px]'></i>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> 03/29/2023</div>
                                       </div>
                                       <Link href=''><Image src="/assets/images/arrowright.svg" height={24} width={24} alt="" /></Link>

                                    </div>

                                    <div className='flex gap-3'>
                                       <Image src={"/assets/images/userImg.png"} width={"38"} height={"38"} className='rounded-full w-[38px] h-[38px] xl:w-[1.979vw] xl:h-[1.979vw]' />
                                       <div>
                                          <div className='text-[14px] xl:text-[0.781vw] 
                                                  text-[#fff] font-medium'> Esther Howard</div>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> ID: 165165165165156</div>
                                       </div>
                                    </div>
                                    <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#fff] font-light mt-2'> Request Type is a long text?</div>

                                 </div>
                                 <div className='bg-[#18233A] radius8 xl:p-[0.833vw] p-[16px] relative'>
                                    <div className='absolute right-2 -top-2'>
                                       <div className='bg-[#F6A000] text-[#101828] text-[10px] 
                                                   xl:text-[0.625vw] xl:px-[0.400vw] px-[6px]
                                                    xl:py-[0.401vw] py-[10px] rounded-full font-semibold leading-tight'> Awaiting Approval</div>
                                    </div>
                                    <div className='flex justify-between mt-3 mb-3 xl:mb-[1.200vw]'>
                                       <div className='flex gap-2 items-center'>
                                          <i className='gusd-calendar 
                                                   text-[#E5E8EF99] text-[14px]'></i>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> 03/29/2023</div>
                                       </div>
                                       <Link href=''><Image src="/assets/images/arrowright.svg" height={24} width={24} alt="" /></Link>

                                    </div>

                                    <div className='flex gap-3'>
                                       <Image src={"/assets/images/userImg.png"} width={"38"} height={"38"} className='rounded-full w-[38px] h-[38px] xl:w-[1.979vw] xl:h-[1.979vw]' />
                                       <div>
                                          <div className='text-[14px] xl:text-[0.781vw] 
                                                  text-[#fff] font-medium'> Esther Howard</div>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> ID: 165165165165156</div>
                                       </div>
                                    </div>
                                    <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#fff] font-light mt-2'> Request Type is a long text?</div>

                                 </div>
                                 <div className='bg-[#18233A] radius8 xl:p-[0.833vw] p-[16px] relative'>
                                    <div className='absolute right-2 -top-2'>
                                       <div className='bg-[#F6A000] text-[#101828] text-[10px] 
                                                   xl:text-[0.625vw] xl:px-[0.400vw] px-[6px]
                                                    xl:py-[0.401vw] py-[10px] rounded-full font-semibold leading-tight'> Awaiting Approval</div>
                                    </div>
                                    <div className='flex justify-between mt-3 mb-3 xl:mb-[1.200vw]'>
                                       <div className='flex gap-2 items-center'>
                                          <i className='gusd-calendar 
                                                   text-[#E5E8EF99] text-[14px]'></i>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> 03/29/2023</div>
                                       </div>
                                       <Link href=''><Image src="/assets/images/arrowright.svg" height={24} width={24} alt="" /></Link>

                                    </div>

                                    <div className='flex gap-3'>
                                       <Image src={"/assets/images/userImg.png"} width={"38"} height={"38"} className='rounded-full w-[38px] h-[38px] xl:w-[1.979vw] xl:h-[1.979vw]' />
                                       <div>
                                          <div className='text-[14px] xl:text-[0.781vw] 
                                                  text-[#fff] font-medium'> Esther Howard</div>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> ID: 165165165165156</div>
                                       </div>
                                    </div>
                                    <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#fff] font-light mt-2'> Request Type is a long text?</div>

                                 </div>
                                 <div className='bg-[#18233A] radius8 xl:p-[0.833vw] p-[16px] relative'>
                                    <div className='absolute right-2 -top-2'>
                                       <div className='bg-[#F6A000] text-[#101828] text-[10px] 
                                                   xl:text-[0.625vw] xl:px-[0.400vw] px-[6px]
                                                    xl:py-[0.401vw] py-[10px] rounded-full font-semibold leading-tight'> Awaiting Approval</div>
                                    </div>
                                    <div className='flex justify-between mt-3 mb-3 xl:mb-[1.200vw]'>
                                       <div className='flex gap-2 items-center'>
                                          <i className='gusd-calendar 
                                                   text-[#E5E8EF99] text-[14px]'></i>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> 03/29/2023</div>
                                       </div>
                                       <Link href=''><Image src="/assets/images/arrowright.svg" height={24} width={24} alt="" /></Link>

                                    </div>

                                    <div className='flex gap-3'>
                                       <Image src={"/assets/images/userImg.png"} width={"38"} height={"38"} className='rounded-full w-[38px] h-[38px] xl:w-[1.979vw] xl:h-[1.979vw]' />
                                       <div>
                                          <div className='text-[14px] xl:text-[0.781vw] 
                                                  text-[#fff] font-medium'> Esther Howard</div>
                                          <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#E5E8EF99] font-light'> ID: 165165165165156</div>
                                       </div>
                                    </div>
                                    <div className='text-[12px] xl:text-[0.625vw] 
                                                  text-[#fff] font-light mt-2'> Request Type is a long text?</div>

                                 </div>
                              </div>

                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </Layout>

         <Sidebar visible={visibleRight} position="right" onHide={() =>
                     setVisibleRight(false)} className="customesidebar1 masterpopup w-full">

                     <div className="bg-[#F5F6F7] h-full relative p-5 Inter-FontFamily">
                        <div className="">
                           <button onClick={() => setVisibleRight(false)}> <i className='gusd-close-sidebar text-black ' style={{ fontSize: 20 }}></i>
                           </button>
                        </div>
                        <div className="mt-5 xl:mt-[1.250vw] ">
                           <div className="text-[#113699] text-base xl:text-[0.833vw] font-semibold -tracking-[0.02em]">Create Group</div>
                           <div className="text-[#344054] text-xs xl:text-[0.729vw] font-light">Roles</div>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-lg'>
                          <div className='mt-5 cusdropdown'>
                            <div className='px-4 py-4 space-y-3'>
                            <div className=''>
                                      <div className='text-sm xl:text-[0.729vw] text-[#344054] font-medium pb-1'>Group name</div>
                                      <InputText placeholder="Type Here" className="w-full text-[16px] text-[#667085] box-shadow-2" />
                                  </div>
                              <div className=''>
                              <div className='text-[#344054] text-sm xl:text-[0.729vw] font-medium pb-1'>Role</div>
                              <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" placeholder="Approver" className="w-full rounded-lg h-10 border border-[#E4E7EC] placeholder-black box-shadow-2" />
                              </div>
                              <div className=''>
                              <div className='text-[#344054] text-sm xl:text-[0.729vw] font-medium pb-1'>Select User</div>
                              <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" placeholder="All" className="w-full rounded-lg h-10 border border-[#E4E7EC] box-shadow-2" />
                              </div>
                              </div>
                          </div>
                        </div>
                        <div className='lg:absolute left-0 right-0 bottom-0 px-4 py-5 text-right'>
                        <div className='flex items-center justify-end gap-1 xl:gap-[0.521vw]'>
                           <Link href="" className="cancelBtnbgnone radius8 mr-3">Cancel</Link>
                           <Link href="" className="custmBtnbottom blue radius8" onClick={() => setVisibleRight(false)}>Create Group</Link></div>
                        </div>
                     </div>
                  </Sidebar>
      </>
   );
}