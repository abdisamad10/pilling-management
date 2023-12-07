
// import mData from '../agents.json';
import Table from '../components/Table';


import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";


function Agents() {


const baseUrl = 'https://spiky-crater-dep2vxlep8.ploi.online';

const columns = useMemo(
  () => [
    {
      header: 'No',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'fullname',
    },

      {
        header: 'Description',
        accessorKey: 'description',
        
      },
    {
        header: 'Business',
        accessorKey: 'business',
        
      },
      {
        header: 'Phone',
        accessorKey: 'phone',
      
      },

      {
        header: 'Action',
        accessorKey: 'action',
        cell: ({row}) => {
          const [editModal, setEditModal] = useState(false);
          return (
            <div className='flex space-x-3 pl-36'>
            <button type='button' onClick={()  => setEditModal(true)} className='bg-blue-600 w-8 h-10 rounded-md'>
            <MdOutlineModeEdit className='w-8 h-6 text-white' />
            </button>
            <button className='bg-red-600 w-8 h-10 rounded-md'>
            <RiDeleteBin6Line  className='w-8 h-6 text-white'  />
            </button>

            {editModal &&(
              <div className='absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40'>
             <EditOrder />
             </div>
             ) }
            </div>
          )
        
        }
      
      },
  ],
  []
);

const [data, setData] = useState([]);

useEffect(() => {
  (async () => {
    const token = localStorage.getItem('token')
   
    const result = await axios(`${baseUrl}/api/v1/agents`, {headers: {"Authorization": "Bearer " + token}});
    setData(result.data.data);
    console.log(result.data.data);
  })();
}, []);


return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Agents</h1>
      <button className='bg-blue-600 w-40 h-14 flex justify-center items-center font-bold text-white rounded-md absolute right-[340px] top-[198px]'>
        
        <IoMdAddCircle className='w-10 h-8'/>
        AddOrders</button>
    <Table data={data} columns={columns}/>

</div>
)
}

export default Agents