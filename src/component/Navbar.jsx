import React from 'react'
import {Outlet} from 'react-router-dom'
import SideNav from './SideNav'
import TopNav from './TopNav'
const Navbar = () => {
  return (
    <div className='w-screen h-screen flex flex-row p-2 bg-[#d3cecb]'>
        <div className='w-[15%] h-full p-2'>
            <div className='w-full bg-[#10659c] h-full rounded-lg'>
                <SideNav />
            </div>
        </div>
        <div className='w-[85%] h-full p-2'>
            <div className='bg-[#10659c] rounded-lg h-20 w-full'>
                <TopNav />
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Navbar