import React from 'react'
import { FaBell } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
// import { SiBlockchaindotcom } from "react-icons/si";
import logo from '../Image/logo.jpeg'
const TopNav = () => {
  return (
    <div className='w-full h-full flex justify-end items-center pr-6 '>
        <div className='w-56 h-full flex justify-center items-center '>
            <div className='max-w-md mx-auto '>
                <div className="relative flex items-center w-full h-10 rounded-2xl focus-within:shadow-lg bg-cyan-900 overflow-hidden">
                    <div className="grid place-items-center h-full w-20 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-cyan-900 text-sky-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-cyan-900"
                        type="text"
                        id="search"
                        placeholder="Search Report" /> 
                </div>
            </div>
        </div>
        <div className='flex justify-between w-36 pr-4 ps-4'>
            <div>
                <FaBell style={{color:'#fff',fontSize:'25px'}} />
            </div>
            <div>
                {/* <SiBlockchaindotcom style={{color:"#ffff", fontSize:'25px'}}/> */}
                <img src ={logo} className='size-6'/>
            </div>
            <div>
                <BsThreeDots style={{color:"#fff", fontSize:'25px'}} />
            </div>

        </div>
    </div>
  )
}

export default TopNav;