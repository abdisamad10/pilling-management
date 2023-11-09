import React, { useState } from 'react';
import coverImage from '../assets/Bg Elements.svg';
import logoImage from '../assets/Logo.svg';
import { BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  

   
    //  let item = {name, password, email}
    //  console.log(item);
  

  const {
    register,
    formState: {errors},
    handleSubmit,

  } = useForm ();


   const  onSubmit = async (data)   => {
   console.log(data);

    const res = await axios.post(`${baseUrl}/api/auth/register`, data);

    localStorage.setItem("token", res.data.token);

    if (res.status === 200) {
      alert("Resgistration successful");
    } else {
      alert(errors.data)
    }
}

  


  return (
    <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-[#f9f9f9]'>
          <div className=''>
          <div className='absolute mt-10 ml-10'>
                <img  src={logoImage} alt='logo'/>
          </div>
              <img src={coverImage} alt='cover-img' className='object-cover h-screen'/>
          </div>

          <div className='bg-white w-[500px] h-[663px] mt-[150px] ml-[120px] shadow-md'>
             <div className='mt-6'>
             <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
                <p className='text-center mt-3'>Create your Hope UI account</p>
             </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' mt-6 w-[452px] h-[520px]'>
          
               <div className='grid grid-cols-2 mx-10  gap-20'>
               <label>First Name
               <input {...register("name", {required: true} )} type="text" name="name" id="name" placeholder='Abdisamad' onChange={e => setName(e.target.value)} value={name} className="block w-[200px] h-[35px] bg-[#f9f9f9]  rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               {errors.name?.type === "required" && (
                <span role='alert' className='text-red-500'>FName is required</span>
               )}
               </label>
                

               <label>Last Name
               <input {...register("lastName", {required: true})} type="text" name="lastName" id="lastName" placeholder='Moha' autocomplete="given-name" class="block w-[200px] h-[35px] bg-[#f9f9f9]  rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               {errors.lastName?.type === "required" && (
                <span role='alert' className='text-red-500'>LName is required </span>
               )}
               </label>
               </div>

               <div className='grid grid-cols-2 mx-10  gap-20 my-3'>
               <label>Email
               <input {...register("email", {required: true})} type="email" onChange={e => setEmail(e.target.value)}    name="email" value={email} id="email" placeholder='xyz@example.com ' autocomplete="given-name" class="block w-[200px] h-[35px] bg-[#f9f9f9]  rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               {errors.email?.type === "required" && (
                <span role='alert' className='text-red-500'> email is required</span>
               )}
               </label>

               <label>Phone No.
               <input {...register("phone", {required: true})} type="phone" name="phone" id="phone" placeholder='12345676'  class="block w-[200px] h-[35px] bg-[#f9f9f9]  rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               {errors.phone?.type === "required" && (
                <span role='alert' className='text-red-500'>phone is required</span>
               )}
               </label>
               </div>
              
               <div className='grid grid-cols-2 mx-10  gap-20 my-3'>
               <label>Password
               <input {...register("password", {required: true})} type="password" onChange={e => setPassword(e.target.value)} value={password} name="password" id="password" placeholder='xxxxxxxx' autocomplete="given-password" class="block w-[200px] h-[35px] bg-[#f9f9f9]  rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               {errors.password?.type === "required" && (
                <span role='alert' className='text-red-500'>pass is required</span>
               )}
               </label>

               <label>Confirm Password
               <input {...register("conpassword")} type="password" name="confirmPassword" id="confirmPassword" placeholder='xxxxxxxx ' autocomplete="given-name" class="block w-[200px] h-[35px] bg-[#f9f9f9]  rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               {errors.password?.type === "required" && (
                <span role='alert' className=' text-red-500'>Con pass is required</span>
               )}
               </label>    
               </div>

                <div className='flex  mt-6 justify-center'>
                    <input className='ml-10' type='checkbox' />
                    <p className='ml-4'>I agree with the terms of use</p>
                </div>

                <div className='flex justify-center mt-5'>
                <button type='submit'  className='ml-10 rounded-md w-[110px] h-[44px] text-white bg-[#3A57E8]'>Sign Up</button>
                </div>
               
            </form>
             <div className='m-10 mt-[-108px]'>
                    <p className='ml-24'>or sign up with other accounts?</p>
                    <div className='flex justify-center ml-14   my-4 space-x-6'>
                     <a href='https://www.google.com/'> <FcGoogle /></a>
                     <a href='https://www.facebook.com'> <BsFacebook className='text-blue-500' /></a>
                    <BsInstagram className='text-pink-500'/>
                    <BsLinkedin className='text-blue-500' />
                    </div>
                    <p className='ml-24  '>Already have an Account <a href='/signin' className='text-[#3A57E8]'>Sign in</a></p>
                </div>

          </div>
        </div>
    </div>
  )
}

export default SignUp

