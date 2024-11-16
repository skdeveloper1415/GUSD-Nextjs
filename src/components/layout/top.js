import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google'
import { TieredMenu } from 'primereact/tieredmenu';
import { OverlayPanel } from 'primereact/overlaypanel';
import { ScrollPanel } from 'primereact/scrollpanel';


const myinter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Top({ ...pageProps }) {
  const menu = useRef(null);
  const notification = useRef(null);
  const mail = useRef(null);
  const router = useRouter()

  const [activate, setActivate] = useState("");
  const toggleActive = () => {
    setActivate(activate === "active" ? "" : "active");
  };

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const items = [
    {
      label: 'View profile',
      icon: 'gusd-user',
    },
    {
      label: 'Settings',
      icon: 'gusd-setting',
    },
    {
      label: 'Change Password',
      icon: 'gusd-lock',
    },
    {
      separator: true
    },
    {
      label: 'Switch Account',
      icon: 'gusd-switch-account',
      items: [
        {
          label: 'Admin',
          url:'/admin/dashboard'
        },
        {
          label: 'Initiator',
          url:'/Initiator/reports'
        },
        {
          label: 'Approver',
          url:'/approver'
        },
        {
          label: 'Payroll',
          url:'/payroll'
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Switch to Dark Mode',
      icon: 'gusd-darkmode',
    },
    {
      separator: true
    },
    {
      label: 'Log out',
      icon: 'gusd-logout'
    }
  ];


  return (
    <div className={myinter.className}>
      <div className='fixed w-full z-20 header-wrap'>
        <div className='pl-[80px] xl:pl-[4.167vw]'>
          <div className='bg-white dashboardHeader shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)] py-[0.500vw] relative z-20' >
            <div className='px-[15px] xl:px-[3.125vw] py-[12px] xl:py-[0.625vw]' data-aos="fade-down" data-aos-duration="700" data-aos-delay="500">
              <div className='flex items-center justify-between'>
                <div className='headerTitle'>Reports</div>
                <div className='flex items-center divide-x divide-[#E0E0E0] gap-x-[20px] lg:gap-x-[40px] xl:gap-x-[2.083vw]'>
                  <div className='space-x-[20px] lg:space-x-[40px] xl:space-x-[2.083vw] relative'>
                    <Link href={""} onClick={(e) => mail.current.toggle(e)}><i className='gusd-mail text-[#667085] text-[20px] xl:text-[1.250vw]'></i></Link>
                    <Link href={""} onClick={(e) => notification.current.toggle(e)}><i className='gusd-notification text-[#667085] text-[20px] xl:text-[1.250vw]'></i></Link>
                    <OverlayPanel ref={mail} showCloseIcon className='notification'>
                      <div className='text-[#344054] font-semibold text-[18px] xl:text-[0.938vw] mb-[8px] xl:mb-[0.417vw]'>Emails</div>
                      <ScrollPanel style={{ width: '100%', height: '23.438vw' }} className="custombar1">
                      <div className='grid grid-cols-1 divide-y'>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Akshay Kali</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>changed the input name of employee from “Kalvin” to “Samston”.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Aarav Apsaras</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Niyati Daru</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Ravi Sai</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Report rejected</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      </ScrollPanel>
                    </OverlayPanel>
                    <OverlayPanel ref={notification} showCloseIcon className='notification'>
                      <div className='text-[#344054] font-semibold text-[18px] xl:text-[0.938vw] mb-[8px] xl:mb-[0.417vw]'>Notifications</div>
                      <ScrollPanel style={{ width: '100%', height: '23.438vw' }} className="custombar1">
                      <div className='grid grid-cols-1 divide-y'>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-chat text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>New coment in parties tab</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>changed the input name of employee from “Kalvin” to “Samston”.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-close-circle-bold text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Report rejected</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-pluse-circle text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>New report for review</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-close-circle-bold text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Report rejected</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-close-circle-bold text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Report rejected</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-close-circle-bold text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Report rejected</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                        <div className='col py-[18px] xl:py-[0.625vw]'>
                          <div className='flex items-center justify-between space-x-[8px] xl:space-x-[0.417vw]'>
                            <div className='flex items-start space-x-[10px] xl:space-x-[0.521vw]'>
                              <div><i className='gusd-close-circle-bold text-[18px] xl:text-[1.042vw] text-[#667085]'></i></div>
                              <div className='content'>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054] font-semibold'>Report rejected</div>
                                <div className='text-[14px] xl:text-[0.729vw] text-[#344054]'>Information Missing for  "David", Please review and resubmit.</div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw]'>11:15 am, 14th Feb.</div>
                              </div>
                            </div>
                            <div className='dot'>
                              <i className='gusd-dot text-[16px] xl:text-[0.833vw] text-[#FDB022]'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      </ScrollPanel>
                    </OverlayPanel>
                  </div>
                  <div className='pl-[20px] lg:pl-[40px] xl:pl-[2.083vw]'>
                    <div className='flex items-center space-x-[20px] xl:space-x-[1.042vw] cursor-pointer' onClick={(e) => menu.current.toggle(e)}>
                      <Image src={"/assets/images/userImg.png"} width={"48"} height={"48"} className='rounded-full w-[48px] h-[48px] xl:w-[2.500vw] xl:h-[2.500vw] object-cover userImg' />
                      <i className='gusd-arrow-down text-[#667085] text-[14px] xl:text-[0.729vw]'></i>
                    </div>
                  </div>
                  <TieredMenu model={items} popup ref={menu} className='profileDropdown' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className={hovered ? 'fixed left-0 top-0 bg-[#113699] py-[20px] xl:py-[1.042vw] px-[12px] xl:px-[0.625vw] w-full max-w-[80px] xl:max-w-[4.167vw] h-full z-20 menu-wrap active' : 'fixed left-0 top-0 bg-[#113699] py-[20px] xl:py-[1.042vw] px-[12px] xl:px-[0.625vw] w-full max-w-[80px] xl:max-w-[4.167vw] h-full z-20 menu-wrap'} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <ul>
            <li className='logo' data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
              <Link href={""}><Image src={"/assets/images/logo.png"} width={"104"} height={"105"} className='' /></Link>
            </li>
            <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
              <Link href={""} className='active'>
                <i className='gusd-home'></i>
                <span>Home</span>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-duration="700" data-aos-delay="500" id={activate}>
              <Link href={""} onClick={toggleActive}>
                <i className='gusd-setting'></i>
                <span>Manage Masters</span>
                <i className='gusd-arrow-down'></i>
              </Link>
              <ul className='sub-menu'>
                <li>
                  <Link href={""}>Admin</Link>
                </li>
                <li>
                  <Link href={"/admin/role"}>Role</Link>
                </li>
                <li>
                  <Link href={""}>Master</Link>
                </li>
              </ul>
            </li>
            <li data-aos="fade-right" data-aos-duration="900" data-aos-delay="500">
              <Link href={""}>
                <i className='gusd-document'></i>
                <span>Manage Document</span>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-duration="1100" data-aos-delay="500">
              <Link href={""}>
                <i className='gusd-help'></i>
                <span>Help</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

}