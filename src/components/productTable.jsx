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
import {columns} from './ProductCulumn';


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
    
    <Table data={data} columns={columns}/>

</div>
)
}

export default ProductTable