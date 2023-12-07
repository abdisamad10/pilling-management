import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '',
        pv: 1800,
        amt: 2181,
      },
  {
    name: 'Jan',
    pv: 4400,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 2198,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 9000,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    pv: 4900,
    amt: 2181,
  },
  {
    name: 'Jul',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Aug',
    pv: 4800,
    amt: 2081,
  },
  {
    name: 'Sep',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Oct',
    pv: 4800,
    amt: 2181,
  },
  {
    name: '',
    
  },
  {
    name: '',
  
  },
];


function Charts() {
  return (
    <div>
    <div className="absolute ml-[320px] shadow-md bg-white w-[1540px] mt-[-50px]">
        <LineChart
          width={1540}
          height={800}
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
     </div>
    </div>
  )
}

export default Charts