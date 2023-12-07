// import {useReactTable, 
//     getCoreRowModel, 
//     flexRender, 
//     getPaginationRowModel,
//     getSortedRowModel,
//     getFilteredRowModel,
//     } from '@tanstack/react-table';
import mData from '../product.json';
import Table from '../components/Table';
// import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'
// import {BiSkipNext} from 'react-icons/bi';
// import {GoSearch} from 'react-icons/go';
import axios from 'axios';
import React, {useEffect, useMemo, useState } from 'react';
// import {columns} from './ProductCulumn';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";


function ProductTable() {

  const baseUrl = 'https://spiky-crater-dep2vxlep8.ploi.online';

  const columns = useMemo(
    () => [
      {
        header: 'No',
        accessorKey: 'id',
      },
      {
        header: 'Name',
        accessorKey: 'name',
      },
        {
          header: 'Price',
          accessorKey: 'price',
        
        },
      {
        header: 'Commission',
        accessorKey: 'commission',
      },
  
        {
          header: 'Action',
          accessorKey: 'action',
          cell: ({row}) => {
            const [editModal, setEditModal] = useState(false);
            return (
              <div className='flex space-x-3 pl-44'>
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
     
      const result = await axios(`${baseUrl}/api/v1/products`, {headers: {"Authorization": "Bearer " + token}});
      setData(result.data.data);
      console.log(result.data.data);
    })();
  }, []);

return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Product</h1>
    
      <button className='bg-blue-600 w-40 h-14 flex justify-center items-center font-bold text-white rounded-md absolute right-[340px] top-[198px]'>
      
      <IoMdAddCircle className='w-10 h-8'/>
      AddOrders</button>
    <Table data={data} columns={columns}/>

</div>
)
}

export default ProductTable