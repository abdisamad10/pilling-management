
// import mData from '../agents.json';
import Table from '../components/Table';


import React, { useEffect, useMemo, useState } from 'react';
// import {columns} from './AgentColumn';
import axios from 'axios';


function Agents() {
// const [agentsApi, setAgentsApi] = useState([]) 

// const data = useMemo(()=> agentsApi, []);

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
// const fetchAgents = () => {

//   const res = axios.get(`${baseUrl}/api/v1/agents`)
//    .then(data => {
//     console.log(res.data);
//     setAgentsApi(res.data);
//    }).catch(Error => {
//     console.log(err);
//    },[]);

// }



return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Agents</h1>
     
    <Table data={data} columns={columns}/>

</div>
)
}

export default Agents