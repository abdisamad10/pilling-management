import React from 'react'

function Cards() {
  return (
    <div>
        <div className="relative pt-32 pb-32 bg-lightBlue-500">
          <div className="px-4 md:px-6 mx-auto w-[1620px] ml-[280px] mt-[-90px]">
             <div>
                <div className="flex flex-wrap ">
                   <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col p-4 min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-md h-[140px]">
                         <div className="flex-auto ">
                            <div className="flex flex-wrap">
                               <div className="relative w-full p-2 pr-4 max-w-full flex-grow flex-1">
                                  <h5 className="text-gray-600   text-xl mb-1">Hide</h5>
                                  <span className=" text-3xl ">2,590</span>
                               </div>
                               <div className="relative w-auto pl-4 flex-initial">
                                  <div className="text-white  text-center inline-flex items-center justify-center w-14 h-6 mt-2 mr-2 rounded-full bg-gray-300"><span className="text-blue-600">Yearly</span></div>
                               </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 pl-2"><span className="whitespace-nowrap">Agency</span></p>
                         </div>
                      </div>
                   </div>
                   <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col p-4 min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-md h-[140px]">
                         <div className="flex-auto ">
                            <div className="flex flex-wrap">
                               <div className="relative w-full p-2 pr-4 max-w-full flex-grow flex-1">
                                  <h5 className="text-gray-600   text-xl mb-1">Hide</h5>
                                  <span className=" text-3xl ">10,000</span>
                               </div>
                               <div className="relative w-auto pl-4 flex-initial">
                                  <div className="text-white  text-center inline-flex items-center justify-center w-14 h-6 mt-2 mr-2 rounded-full bg-gray-300"><span className="text-blue-600">Yearly</span></div>
                               </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 pl-2"><span className="whitespace-nowrap">Customers</span></p>
                         </div>
                      </div>
                   </div>
                   <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col p-4 min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-md h-[140px]">
                         <div className="flex-auto ">
                            <div className="flex flex-wrap">
                               <div className="relative w-full p-2 pr-4 max-w-full flex-grow flex-1">
                                  <h5 className="text-gray-600   text-xl mb-1">Hide</h5>
                                  <span className=" text-3xl ">100</span>
                               </div>
                               <div className="relative w-auto pl-4 flex-initial">
                                  <div className="text-white  text-center inline-flex items-center justify-center w-14 h-6 mt-2 mr-2 rounded-full bg-gray-300"><span className="text-blue-600">Yearly</span></div>
                               </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 pl-2"><span className="whitespace-nowrap">Products</span></p>
                         </div>
                      </div>
                   </div>

                   <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col p-4 min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-md h-[140px]">
                         <div className="flex-auto ">
                            <div className="flex flex-wrap">
                               <div className="relative w-full p-2 pr-4 max-w-full flex-grow flex-1">
                                  <h5 className="text-gray-600   text-xl mb-1">Hide</h5>
                                  <span className=" text-3xl ">150</span>
                               </div>
                               <div className="relative w-auto pl-4 flex-initial">
                                  <div className="text-white  text-center inline-flex items-center justify-center w-14 h-6 mt-2 mr-2 rounded-full bg-gray-300"><span className="text-blue-600">Yearly</span></div>
                               </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 pl-2"><span className="whitespace-nowrap">Orders</span></p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Cards