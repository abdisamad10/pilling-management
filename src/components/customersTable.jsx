
import Table from '../components/Table';
import mData from '../Mock_Data.json';


import React, { useMemo, useState } from 'react';
import {columns} from './CutomersColumns';


function CustomerTable() {

   
    const data = useMemo(()=> mData, []);




  return (
    <div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
          <h1 className='my-8 pl-20 text-2xl font-bold'>Customers</h1>
       
        <Table data={data} columns={columns}/>

    </div>
  )
}

export default CustomerTable