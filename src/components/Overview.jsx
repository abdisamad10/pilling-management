import React from 'react'

function Overview() {
  return (
    <div className='flex justify-between w-[1550px]  mt-[110px] ml-[310px]'>
        <label htmlFor="small" className="block mb-2 text-2xl  text-gray-900 font-bold dark:text-white">Dashboard</label>
        <select defaultValue={'default'} id="small" className="block w-[110px]  p-2 mb-6 text-sm text-blue-600  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 d dark:text-white darkfocus:ring-blue-500 dark:focus:border-blue-500">
        <option value={'default'} disabled>Last 30 Days</option>
        <option value="US">United States</option>
       
        </select>
    </div>
  )
}

export default Overview