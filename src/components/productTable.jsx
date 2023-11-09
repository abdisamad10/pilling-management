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

import React, { useMemo, useState } from 'react';
import {columns} from './ProductCulumn';


function ProductTable() {

// {
//     "No": 1,
//     "Name": "Abdisamad Moha",
//     "Contact": "615888069",
//     "Address": "4140 Parker Rd. ",
//     "Description": " here are  notes",
//     "Agents": "CGC"
// }
const data = useMemo(()=> mData, []);

// const [sorting, setSorting] = useState([]);

// const [filtering, setfiltering] = useState('')

// const  [pageSize, setPageSize] = useState('');


//     const table= useReactTable({data, columns, 
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//         getFilteredRowModel: getFilteredRowModel(),
//         state : {
//             sorting : sorting,
//             globalFilter : filtering
//         },
//         onSortingChange : setSorting,
//         onGlobalFilterChange : setfiltering,
//     })


return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Customers</h1>
     {/* <div className='flex justify-between items-center px-20 mb-8'>
    <label> Showing
     <select
      value={pageSize}
      onChange={e => {
          setPageSize(Number(e.target.value))
      }}
    >
      {[10, 5, 20].map(pageSize => (
          <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select> entries</label>

    <div >
        <input type='text' className='bg-[#E9ECEF] rounded-md p-3 h-10 w-60' value={filtering} onChange={e => setfiltering(e.target.value)}/>
        <GoSearch className='absolute right-24 mt-[-36px] w-6 h-8'/>
        </div>
     </div>
    <table >
         <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => 
                (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()} className='p-6'>
                    {header.isPlaceholder ? null : (
                        <div>
                        {flexRender(header.column.columnDef.header,
                        header.getContext())}
                            {
                        {
                            asc : '🔼',   desc : '🔽'
                        }
                        [header.column.getIsSorted() ?? null]
                    }
                    </div>
                    )}
                
                    </th>
                ))}
               
                
            </tr>
        ))}
        </thead>
        <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id} >
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className='pl-28 py-4 border-b-2 '>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
           
          ))}
         
        </tr>
        
      ))}
     
    </tbody>
    </table>
    <div className='space-x-2 my-5     flex  justify-end '>
        <button  onClick={()=> table.setPageIndex(0)}><MdKeyboardDoubleArrowLeft className=' w-10 h-10' /></button>
        <button  className='rotate-180 w-10 h-10' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}><BiSkipNext className=' w-10 h-10' /></button>
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}><BiSkipNext className=' w-10 h-10' /></button>
        <button className='rotate-180' onClick={() => table.setPageIndex(table.getPageCount() -1)}><MdKeyboardDoubleArrowLeft className=' w-10 h-10' /></button>
    </div> */}
    <Table data={data} columns={columns}/>

</div>
)
}

export default ProductTable