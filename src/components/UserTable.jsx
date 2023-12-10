
import Table from '../components/Table';

import axios from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

import AddNewuser from '../components/crud-users/AddNewUser';



import React, {useEffect, useMemo, useState } from 'react';
import EditUser from '../components/crud-users/EditUser';



function UserTable() {


  const [showuser, setshowuser] = useState(false);
  const [showedit, setshowedit] = useState(false);


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
          header: 'Email',
          accessorKey: 'email',
          
        },
  
        {
          header: 'Action',
          accessorKey: 'action',
          cell: ({row}) => {
            const [editModal, setEditModal] = useState(false);
            return (
              <div className='flex space-x-3 pl-56'>
              <button  onClick={() => setshowedit(true)}  type='button' className='bg-blue-600 w-8 h-10 rounded-md'>
              <MdOutlineModeEdit className='w-8 h-6 text-white' />
              </button>
              <button className='bg-red-600 w-8 h-10 rounded-md'>
              <RiDeleteBin6Line  className='w-8 h-6 text-white'  />
              </button>
     
              
            
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
         
          const result = await axios(`${baseUrl}/api/v1/users`, {headers: {"Authorization": "Bearer " + token}});
          setData(result.data.data);
          console.log(result.data.data);
        })();
      }, []);
  



return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Users</h1>
      <button  onClick={() => setshowuser(true)} className='bg-blue-600 w-40 h-14 flex justify-center items-center font-bold text-white rounded-md absolute right-[340px] top-[198px]'>
      
      <IoMdAddCircle className='w-10 h-8'/>
      AddNewUser</button>
      
      <AddNewuser onClose={() => setshowuser(false)} showuser={showuser}/>
      <EditUser onClose={() => setshowedit(false)} showedit={showedit} />
     
    <Table data={data} columns={columns} />
    

</div>
)
}

export default UserTable