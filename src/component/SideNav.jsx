import React from 'react'

import { RiLogoutBoxRLine } from "react-icons/ri";
const NavTabs = [
    {
        lable: "Reports",
        value: "Reports",
    },
    {
        lable: "Apointments",
        value: "Appointments",
    },
    {
        lable: "Patients",
        value: "Patients",
    },
    {
        lable: "Doctors",
        value: "Doctors",
    },
    {
        lable: "Medicine",
        value: "Medicine",
    },
    {
        lable: "Settings",
        value: "Settings",
    },
]
const SideNav = () => {
  return (
    <div className='w-full h-full pt-4 flex flex-col'>
        <div className='flex items-center justify-center w-full h-20 rounded-lg '>
            <h2 className='uppercase text-emerald-200  font-bold'>Dr. Bharti</h2>
        </div>
        <div className='ps-4 flex-1'>
            <div className='bg-white ps-4 p-2 rounded-l-lg text-cyan-600'>
                <h2 className='font-medium'>
                    Dashboard
                </h2>
            </div>
            {
                NavTabs.map((tab)=>(
                    <div className='ps-4 p-2 rounded-l-lg text-emerald-200 '>
                        <h2 className='font-medium'>
                            {tab.value}
                        </h2>
                    </div>
                ))
            }
        </div>
        <div className='w-full ps-4 p-2 flex items-center text-emerald-200  mt-auto'>
            <h2 className='font-bold p-1'>
                <RiLogoutBoxRLine style={{ fontWeight: '900px'}} className='size-6' /> 
            </h2>
            <h2 className='font-bold '>LogOut</h2>
        </div>
    </div>
  )
}

export default SideNav