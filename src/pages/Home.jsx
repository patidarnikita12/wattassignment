import React from 'react'
import Reports from '../component/Reports'
import Appointments from '../component/Appointments'
import PatientsTable from '../component/PatientsTable'

const Home = () => {
  return (
    <div className='w-full h-full pt-4'>
        <div className='flex w-full h-[46vh]'>
          <div className='w-8/12 bg-white rounded-md'>
            <div className='p-2 ps-4 pr-4'>
              <h2 className='font-bold'>Reports</h2>
            </div>
            <div>
              <Reports />
            </div>
          </div>
          <div className='w-4/12 ps-6'>
            <Appointments />
          </div>
        </div>
        <div className='w-full'>
          <PatientsTable />
        </div>
    </div>
  )
}

export default Home