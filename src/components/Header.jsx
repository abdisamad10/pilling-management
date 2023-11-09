import React from 'react'
import {AiFillHome}  from 'react-icons/ai'
import {LiaFileUploadSolid} from 'react-icons/lia';
import {AiOutlineUserAdd} from 'react-icons/ai';

function Header() {
  return (
    <div>
        <nav class="fixed top-0 z-10 bg-white w-[1610px]  ml-[296px] shadow-md">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 ml-0   lg:px-8">
    <div class="relative flex  h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
        {/* <div class="flex flex-shrink-0 ">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div> */}
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-8 items-c ">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            
            <hr class=" absolute mt-10 h-1 w-24 bg-[#3A57E8]" />
            <a href="#" class="text-gray-400 flex justify-between " aria-current="page">
            <AiFillHome className='w-auto ml-[-23px]  h-[20px] mr-2 text-blue-600 '/> Home</a>
            <div>
            <hr class=" absolute ml-[60px] h-8 w-[2px] mt-[-4px]  bg-[#DCDCDC]" />
            <a href="#" class=" flex justify-center text-blue-600" aria-current="page"> 
            <AiFillHome className='border-left- flex w-auto mr-2 ml-[120px] h-[20px] items-center text-blue-600'/>Paid</a>
             </div>
            <a href="#" class=" flex justify-center text-gray-400" aria-current="page"> 
            <LiaFileUploadSolid className='border-left- flex w-auto mr-2 ml-[28px] h-[20px] items-center text-gray-400'/>Upload</a>
           
          </div>
        </div>
      </div>
      <div class="absolute ml-[1330px] flex justify-between">
       <span class="mt-1 mr-2">EN</span>
        <button type="button" class="relative rounded-full mr-3 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        <hr class="h-6 mt-1  w-[1px] bg-gray-400"/>
        <span class="flex justify-center mt-1 ml-2">Abdisamad</span>
        {/* <!-- Profile dropdown --> */}
        <div class="relative ml-3">
          <div>
          
            <button type="button" class=" bg-blue-600 justify-center w-8 h-8 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <AiOutlineUserAdd  class="h-6 w-6 rounded-full text-white mt-1 " />
            </button>
          </div>

          {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
          {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div> */}
        </div>
      </div>
    </div>
  </div>

  {/* Mobile menu, show/hide based on menu state. */}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header