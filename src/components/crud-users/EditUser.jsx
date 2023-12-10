import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'


const EditUser = props => {

   if(!props.showedit) {
    return null
   }

  const  onsubmit =  (data)   => {
    console.log(data);
 
  }
    
  

  const {
    register,
    formState: {errors},
    handleSubmit,

  } = useForm ();

  return (
    <div className='absolute left-0 right-0 top-0 bottom-0  bg-black bg-opacity-40'>
    <div className='flex justify-center my-36'>
    <form onSubmit={handleSubmit(onsubmit)} className="max-w-xl m-1 p-10  bg-white rounded shadow-xl">
        <div className='flex justify-between items-center mb-5'>
         <h2 className="font-bold">Add New Order</h2>
         <button onClick={props.onClose}  className="bg-blue-600 w-20 h-9 justify-center text-white rounded-md ">close</button>
       </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">ID</label>
      <input {...register("id", {required: true} )} className="w-full px-2 pr-36 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="ID" aria-label="Name"/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" htmlFor="cus_email">Name</label>
      <input {...register("name", {required: true} )} className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Product" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_email">Email</label>
      <input {...register("email", {required: true} )} className="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="Agent" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_email">Email</label>
      <input {...register("email", {required: true} )} className="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="Agent" aria-label="Email"/>
    </div>
   
    
  
    <div className="mt-4 flex justify-between">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-blue-600 rounded" type="submit">Submit</button>
      <button className="px-4 py-1 text-white font-light tracking-wider bg-red-600 rounded" type="submit">Clear</button>
    </div>
  </form>
    </div>
    </div>
  )
}

export default EditUser