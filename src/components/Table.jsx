import {useReactTable, 
    getCoreRowModel, 
    flexRender, 
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    } from '@tanstack/react-table';
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'
import {BiSkipNext} from 'react-icons/bi';
import {GoSearch} from 'react-icons/go';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";

import React, { useMemo, useState } from 'react';



function Table({data, columns}) {




const [sorting, setSorting] = useState([]);

const [filtering, setfiltering] = useState('')

const  [pageSize, setPageSize] = useState('');


    const table= useReactTable({data, columns, 
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state : {
            sorting : sorting,
            globalFilter : filtering
        },
        onSortingChange : setSorting,
        onGlobalFilterChange : setfiltering,
    })


return (
<div className="  grid columns-6 items-start  bg-white shadow-md">
     
     <div className='flex justify-between items-center px-20 mb-8'>
    <label> Showing
    <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 100].map(pageSize => (
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
            <td key={cell.id} className='pl-16 py-4  border-b-2 '>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
             
            </td>
            
           
          ))}
        
          {/* <div className='flex space-x-2 items-center justify-center mt-8 pr-6'>
          <IoPersonAddSharp />
          <MdOutlineModeEdit />
          <RiDeleteBin6Line />
          </div> */}
        </tr>
        
      ))}
     
    </tbody>
    </table>
    <div className=' mx-20 my-3     flex  justify-between'>
       <div>  
       <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        </div>
        <div>
        <button  onClick={()=> table.setPageIndex(0)}><MdKeyboardDoubleArrowLeft className=' w-10 h-10' /></button>
        <button  className='rotate-180 w-10 h-10' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}><BiSkipNext className=' w-10 h-10' /></button>
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}><BiSkipNext className=' w-10 h-10' /></button>
        <button className='rotate-180' onClick={() => table.setPageIndex(table.getPageCount() -1)}><MdKeyboardDoubleArrowLeft className=' w-10 h-10' /></button>
        </div>
    </div>

</div>
)
}

export default Table