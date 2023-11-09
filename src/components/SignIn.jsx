import React from 'react'
import coverImage from '../assets/Bg Elements.svg';
import logoImage from '../assets/Logo.svg';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook,BsInstagram, BsLinkedin } from 'react-icons/bs';

function SignIn() {
  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-[#f9f9f9]'>
          <div className=''>
          <div className='absolute mt-10 ml-10'>
                <img  src={logoImage} alt='logo'/>
          </div>
              <img src={coverImage} alt='cover-img' className='object-cover h-screen'/>
          </div>
          <div class="flex mt-[180px] ml-[130px] w-[500px] h-[559px] flex-1 flex-col  bg-white shadow-md justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto mt-[-110px] sm:w-full sm:max-w-sm">
      <h2 class="mt-24 text-center text-2xl font-bold leading-9 tracking-tight text-[#232D42]">Sign In</h2>
      <p class="mt-2 text-center text-gray-400">Sign in to stay connected.</p>
    </div>

    <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label htmlfor="email" class="block text-sm font-medium leading-6 text-gray-900">Email </label>
          <div class="mt-2">
            <input id="email" name="email" type="email" placeholder='xyz@example.com ' autocomplete="email" required="" class=" bg-[#f9f9f9] block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label htmlfor="password" class=" block text-sm font-medium leading-6 text-gray-900">Password</label>
          
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" placeholder='xxxx' autocomplete="current-password" required="" class="bg-[#f9f9f9] pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          <div class="flex justify-between mt-2">
           
            <p class="pl-3"> <input type='checkbox' /> Remember me?</p>
            <div class="text-sm ">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
        
        </div>

        <div class="flex justify-center">
          <button type="submit" class="flex w-[102px] h-[44px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-5 text-center text-sm text-gray-500">or sign in with other accounts?</p>

      <div className='flex justify-center    my-4 space-x-6'>
                     <a href='https://www.google.com/'> <FcGoogle /></a>
                     <a href='https://www.facebook.com'> <BsFacebook className='text-blue-500' /></a>
                    <BsInstagram className='text-pink-500'/>
                    <BsLinkedin className='text-blue-500' />
                    </div>

      <p class="mt-10 text-center text-sm text-gray-500">
      Don’t have an account?
       
        <a href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Click here to sign up.</a>
      </p>
    </div>
  </div>
          
          </div>
            
    </div>
  )
}

export default SignIn