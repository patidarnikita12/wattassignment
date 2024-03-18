import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const PatientsTable = () => {

    const patientData = [
        {
            Name: "Bharat", Age: 28,
            Address: "E-3, Arera Colony", Phone: 7870001110,
            Email: "bharat11@gmail.com", Disease: "Chickenpox(Varicella)"
        },


        {
            Name: "Shekhar", Age: 35,
            Address: "E-6, Arera Colony", Phone: 9880001110,
            Email: "Shekhar01@gmail.com", Disease: "Diphtheria"
        },
        {
            Name: "Abhinav", Age: 22,
            Address: "E-2, Arera Colony", Phone: 9826001110,
            Email: "Abhinav9@gmail.com", Disease: "Whooping Cough (Pertussis)"
        }

    ]
  return (
    <div className='bg-white mt-3 rounded-lg'>
        <div className='p-2 ps-4 flex justify-between pe-6'>
            <h2 className='font-bold rounded-lg'>
                Recent Patients
            </h2>
            <div>
                <BsThreeDots style={{color:"black", fontSize:'25px'}} />
            </div>
        </div>
        <div>
            <table class="table-auto min-w-full text-left text-sm font-normal text-surface dark:text-white">
                <thead class=" font-medium ">
                    <tr>
                        <th scope="col" class="px-6 py-4">Name</th>
                        <th scope="col" class="px-6 py-4">Age</th>
                        <th scope="col" class="px-6 py-4">Address</th>
                        <th scope="col" class="px-6 py-4">Phone</th>
                        <th scope="col" class="px-6 py-4">Email</th>
                        <th scope="col" class="px-6 py-4">Disease</th>
                    </tr>
                </thead>
                <tbody>
                    {patientData.map((data)=>{
                        return(
                            <tr >
                        <td class="whitespace-nowrap px-6 py-4">{data.Name}</td>
                        <td class="whitespace-nowrap px-6 py-4">{data.Age}</td>
                        <td class="whitespace-nowrap px-6 py-4">{data.Address}</td>
                        <td class="whitespace-nowrap px-6 py-4">{data.Phone}</td>
                        <td class="whitespace-nowrap px-6 py-4">{data.Email}</td>
                        <td class="whitespace-nowrap px-6 py-4">{data.Disease}</td>
                    </tr>
                        )
                    })}
                    
                    
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default PatientsTable