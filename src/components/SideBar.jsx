import React, { useState } from 'react';
import {BsFillArrowLeftCircleFill,BsFillHeartFill} from 'react-icons/bs';
import profileImage from '../assets/Rectangle 525.svg';
import {BsFillCartDashFill} from 'react-icons/bs';
import {MdNotifications} from 'react-icons/md';
import {GiLoveMystery} from 'react-icons/gi';
import {HiHome} from 'react-icons/hi';
import {FaUserCircle} from 'react-icons/fa';
import {BiCustomize, BiSolidHandLeft } from 'react-icons/bi';
import {HiCurrencyDollar} from 'react-icons/hi';
import {AiFillExclamationCircle} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi';
import {IoIosHelpCircle} from 'react-icons/io';
import {VscLayoutSidebarLeft} from 'react-icons/vsc';
import { IoLogOutSharp } from "react-icons/io5";


function SideBar() {
     
  const [SideBarOpen, setSideBarOpen] = useState(true);

  const handleOpen = () => {
    setSideBarOpen(true);
  }

  const handleClose = () => {
    setSideBarOpen(false);
  }
  
  return (
    <div className=' ml-8  mt-6'>
    {!SideBarOpen ? (
      <div onClick={handleOpen}><VscLayoutSidebarLeft className='w-20 h-20' /></div>
    ):(

   
    <div>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased fixed text-gray-800">
  <div className="fixed flex flex-col top-0 left-0 w-[276px] bg-white h-full shadow-md ">
   
    <div className="overflow-y-auto overflow-x-hidden w-[260px] flex-grow bg-white">
    <div onClick={handleClose}>
       <BsFillArrowLeftCircleFill  className="absolute ml-[260px] text-blue-600 mt-[20px] w-[32px] h-[32px]"/>
    </div>
    <div className="flex items-center justify-center h-14 mt-1 font-bold text-2xl">
      <div>Commission System</div>
    </div>

    <div className=" flex flex-col items-center mt-10">
         <div className="border-solid border-2 rounded border-blue-400 pt-2 mb-4">
         <img className="" src={profileImage} alt='' />
          </div>
         <p className="font-bold my-2">Abdisamad Moha</p>
         <span>@Abdi</span>

         <div className="flex space-x-3 my-3">
           <button className=" flex justify-center items-center text-white bg-blue-600 w-[32px]  h-[32px] rounded-full"> <BsFillCartDashFill /></button>
           <button className=" flex justify-center items-center text-white bg-blue-600 w-[32px]  h-[32px] rounded-full"> <BsFillHeartFill /></button>
           <button className=" flex justify-center items-center text-white bg-blue-600 w-[32px]  h-[32px] rounded-full"> <MdNotifications /></button>
         </div>
         <div className="w-[220px] h-[2px] bg-gray-300 mt-3"></div>
       </div>
       
      <ul className="flex flex-col ml-3 py-4 mt-4 space-y-1">
        <li>
          <a href="/" className="relative flex flex-row items-center h-11  focus:outline-none hover:bg-gray-50 text-gray-600  hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 hover:text-blue-600">
              <HiHome className="w-6 h-6 "/>
            </span>
            <span className="ml-2 tracking-wide truncate text-xl">Admin Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/agents" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 w-6 h-6 hover:text-blue-600 rounded-ful">
              <FaUserCircle  className="w-6 h-6 "/>
            </span>
            <span className="ml-2 text-xl tracking-wide truncate">Agents</span>
           
          </a>
        </li>
        <li>
          <a href="/customers" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 hover:text-blue-600">
             <BiCustomize className=" w-6 h-6 " />
            </span>
            <span className="ml-2  tracking-wide truncate text-xl">Customers</span>
          </a>
        </li>
        <li>
          <a href="/product" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 hover:text-blue-600">
             <HiCurrencyDollar className=" w-6 h-6 " />
            </span>
            <span className="ml-2 tracking-wide truncate  text-xl">Products</span>
            {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span> */}
          </a>
        </li>
        <li>
          <a href="/order" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 hover:text-blue-600">
             <AiFillExclamationCircle  className=" w-6 h-6 " />
            </span>
            <span className="ml-2  tracking-wide truncate text-xl">Orders</span>
          </a>
        </li>
        <li className="">
          <a href="/user" className="relative flex flex-row items-center mb-5 h-11 focus:outline-none hover:bg-gray-50 hover:text-blue-600 text-gray-600  border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center  items-center ml-4 hover:text-blue-600">
              <FiUsers  className="w-6 h-6 "/>
            </span>
            <span className="ml-2  tracking-wide truncate text-xl">Users</span>
            {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span> */}
          </a>
        </li>
        <li className="w-[220px] h-[2px] bg-gray-300 "></li>
        <li className="px-1">
          <div className="flex flex-row items-center h-8 mt-4 hover:text-blue-600">
            <div className="text-[18px] tracking-wide text-black">OTHERS</div>
          </div>
        </li>
        <li>
          <a href="/SignOut" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50  hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 hover:text-blue-600">
            <IoLogOutSharp className="w-6 h-6 "/>
            </span>
            <span className="ml-2  tracking-wide truncate  text-xl">Logout</span>
          </a>
        </li>
        <li>
          <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4 hover:text-blue-600">
             <IoIosHelpCircle className="w-6 h-6 " />
            </span>
            <span className="ml-2 tracking-wide truncate  text-xl">Help</span>
          </a>
        </li>
     
      </ul>
    </div>
  </div>
</div>
    </div>
     )
    }
    </div>
  )
}

export default SideBar