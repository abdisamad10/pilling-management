import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useForm } from 'react-hook-form'


const AddNewuser = ({onClose}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState([]);

  const [Adduser, setAdduser] = useState([]);

  //  if(!props.showuser) {
  //   return null
  //  }

  // const  onsubmit =  (data)   => {
  //   console.log(data);
 
  // }

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
  }

  const {
    register,
    formState: {errors},
    handleSubmit,

  } = useForm ();




  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const adduser = (data) => {
    const req = axios.post(`${baseUrl}/api/v1/users`,data , {
      
      headers: {
        "Content-Type":" application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });
   if (req.status === 200) {
      setAdduser(req.data);
   }
   else{
    console.log(errors.message);
   }
  }

  

  const fetchRoleApi = () =>{
    

    const res = axios.get(`${baseUrl}/api/v1/roles`, {
      headers: {
        "Content-Type":" application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    setRole(res.data)

  }

  useEffect(()=> {
    fetchRoleApi()
  }, [])

  return (
    <div className='absolute left-0 right-0 top-0 bottom-0  bg-black bg-opacity-40'>
    <div className='flex justify-center my-36'>
    <form onSubmit={handleSubmit(adduser)} className="max-w-xl m-1 p-10  bg-white rounded shadow-xl">
        <div className='flex justify-between items-center mb-5'>
         <h2 className="font-bold">Add New User</h2>
         <button onClick={onClose}  className="bg-blue-600 w-20 h-9 justify-center text-white rounded-md ">close</button>
       </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
      <input {...register("name", {required: true} )}  value={name} onChange={(e) => setName(e.target.value)} className="w-full px-2 pr-36 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="name" aria-label="Name" />
    </div>
   
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_email">Email</label>
      <input {...register("email", {required: true} )} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="email" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_email">Password</label>
      <input {...register("password", {required: true} )} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="email" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_email">Role</label>
      <select {...register("role", {required: true} )} value="select role"  className="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="role" aria-label="Email">
        <option placeholder='Select role' disabled>select role</option>
        <option></option>
      
      </select>
    </div>
    
  
    <div className="mt-4 flex justify-between">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-blue-600 rounded" type="submit">Submit</button>
      <button className="px-4 py-1 text-white font-light tracking-wider bg-red-600 rounded" type="button" onClick={handleClear}>Clear</button>
    </div>
  </form>
    </div>
    </div>
  )
}

export default AddNewuser