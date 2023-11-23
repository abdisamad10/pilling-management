
import Table from '../components/Table';

import axios from 'axios';



import React, {useEffect, useMemo, useState } from 'react';



function UserTable() {


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
  

    <Table data={data} columns={columns} />
    

</div>
)
}

export default UserTable