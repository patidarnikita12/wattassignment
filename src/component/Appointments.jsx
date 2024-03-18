import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Appointments = () => {

    const patientAppointments = [
        {
        Name:"Aditi",Time:"Time: 11:00 AM"
    },
        {
        Name:"Kshitiz",Time:"Time: 12:00 PM"
    },
        {
        Name:"Aarav",Time:"Time: 12:30 PM"
    },
        {
        Name:"Sukanya",Time:"Time: 01:30 PM"
    }
    ]
  return (
    <div className='bg-white rounded-lg h-full p-4'>
        <div>
            <h2 className='font-bold ml-10'>Apointments</h2>
        </div>
        {/* <div className='p-1'>
            <p className='font-medium'>Aditi</p>
            <p className='font-medium'>Time: 11:00 AM</p>
        </div>
        <div className='p-1'>
            <p className='font-medium'>Aditi</p>
            <p className='font-medium'>Time: 11:00 AM</p>
        </div>
        <div className='p-1'>
            <p className='font-medium'>Aditi</p>
            <p className='font-medium'>Time: 11:00 AM</p>
        </div>
        <div className='p-1'>
            <p className='font-medium'>Aditi</p>
            <p className='font-medium'>Time: 11:00 AM</p>
        </div> */}

        <div className='p-1 ml-10'>
            {patientAppointments.map((data)=>{
               return( <p className='font-medium mt-2'>{data.Name}<br/>
               {data.Time}</p>
               )
            })}
        </div>
        <div className='p-1 ml-8'>
            <div className='w-24 flex justify-center items-center flex-col'>
                <h2 className='font-bold'>See More</h2>
                <IoIosArrowDown style={{fontWeight:'700px'}} />
            </div>
        </div>
     
    </div>
  )
}

export default Appointments