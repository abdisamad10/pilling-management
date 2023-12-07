
import Table from '../components/Table';
// import mData from '../Mock_Data.json';
import axios from 'axios';

import React, {useEffect, useMemo, useState } from 'react';
// import {columns} from './CutomersColumns';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

function CustomerTable() {

   
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
        header: 'Contact',
        accessorKey: 'phone',
        
      },
      {
        header: 'Address',
        accessorKey: 'address',
      
      },
    {
      header: 'Description',
      accessorKey: 'description',
    },
    {
        header: 'Agents',
        accessorKey: 'agency',
      
      },

      {
        header: 'Action',
        accessorKey: 'action',
        cell: ({row}) => {
          const [editModal, setEditModal] = useState(false);
          return (
            <div className='flex space-x-3 pr-7'>
            <button type='button' onClick={()  => setEditModal(true)}>
            <MdOutlineModeEdit className='w-8 h-6 text-blue-600' />
            </button>
            <button>
            <RiDeleteBin6Line  className='w-8 h-6 text-blue-600'  />
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
       
        const result = await axios(`${baseUrl}/api/v1/customers`, {headers: {"Authorization": "Bearer " + token}});
        setData(result.data.data);
        console.log(result.data.data);
      })();
    }, []);


  return (
    <div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
          <h1 className='my-8 pl-20 text-2xl font-bold'>Customers</h1>
       
        <Table data={data} columns={columns}/>

    </div>
  )
}

export default CustomerTable