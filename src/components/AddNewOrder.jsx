import React from 'react'

function AddNewOrder() {
  return (
    <div>
    <div className=' my-48 ml-[600px] px-6 py-8 lg:px-8 w-[622px] h-full bg-white shadow-md'>
        <div className='flex justify-between pb-4'>
         <h2 class="font-bold">Add New Order</h2>
         <button class="bg-blue-600 w-20 h-9 justify-center text-white rounded-md ">close</button>
        </div>
            <div>
            <label for="id" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
             <div class="my-2">
              <input type="text" name="id" id="id" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label for="product" class="block text-sm font-medium leading-6 text-gray-900">Product</label>
             <div class="my-2">
              <input type="text" name="product" id="product" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label for="agent" class="block text-sm font-medium leading-6 text-gray-900">Agent</label>
             <div class="my-2">
              <input type="text" name="agent" id="agent" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
             <div class="mt-2">
              <input type="text" name="amount" id="amount" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
             <div class="my-2">
              <input type="text" name="description" id="description" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label for="status" class="block text-sm font-medium leading-6 text-gray-900">Status</label>
             <div class="my-2">
              <select type="text" name="status" id="status" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></select>
            </div>
            </div>
       
        <div class="flex justify-between mt-4">
         <button class="bg-blue-600 w-20 h-9 rounded-md text-white">submit</button>
         <button class="bg-red-600 w-20 h-9 rounded-md text-white">clear</button>
        </div>


    </div>
    </div>
  )
}

export default AddNewOrder