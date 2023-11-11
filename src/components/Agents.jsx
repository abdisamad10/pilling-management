
import mData from '../agents.json';
import Table from '../components/Table';


import React, { useEffect, useMemo, useState } from 'react';
import {columns} from './AgentColumn';
import axios from 'axios';


function Agents() {
const [agentsApi, setAgentsApi] = useState([]) 

const data = useMemo(()=> agentsApi, []);

const baseUrl = 'https://spiky-crater-dep2vxlep8.ploi.online';

const fetchAgents = () => {
  const res = axios.get(`${baseUrl}/api/v1/agents`)
  const result = res.data.json();
  setAgentsApi(result);

  useEffect(() => {
    fetchAgents()
  }, [])

}



return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Agents</h1>
     
    <Table data={data} columns={columns}/>

</div>
)
}

export default Agents