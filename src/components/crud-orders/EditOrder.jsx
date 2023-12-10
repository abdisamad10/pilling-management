import React from 'react'

const EditOrder = props => {

  if(!props.editOrder) {
    return null
   }

  return (
    <div className='absolute left-0 right-0 top-0 bottom-0  bg-black bg-opacity-40'>
    <div className='flex justify-center my-36'>
    <form class="max-w-xl m-1 p-10  bg-white rounded shadow-xl">
        <div className='flex justify-between items-center mb-5'>
         <h2 class="font-bold">Edit Order</h2>
         <button   onClick={props.onClose}    class="bg-blue-600 w-20 h-9 justify-center text-white rounded-md ">close</button>
       </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">ID</label>
      <input class="w-full px-2 pr-36 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="ID" aria-label="Name"/>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">Product</label>
      <input class="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Product" aria-label="Email"/>
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Agent</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="Agent" aria-label="Email"/>
    </div>
    <div class="mt-2">
      <label class=" text-sm block text-gray-600" for="cus_email">Amount</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Amount" aria-label="Email"/>
    </div>
    <div class="mt-2">
      <label class=" text-sm block text-gray-600" for="cus_email">Description</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Description" aria-label="Email"/>
    </div>
    
    <div class="">
      <label class="block text-sm text-gray-600" for="cus_name">Status</label>
      <select class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email">
       <option className='bg-blue-300 text-blue-600'>Active</option>
       <option className='bg-green-200 text-green-600'>Complete</option>
       <option className='bg-orange-200 text-orange-600'>pending</option>
       <option className='bg-blue-600 text-white'>Hold</option>

      </select>
    </div>
    <div class="mt-4 flex justify-between">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-blue-600 rounded" type="submit">Submit</button>
      <button class="px-4 py-1 text-white font-light tracking-wider bg-red-600 rounded" type="submit">Clear</button>
    </div>
  </form>
    </div>
    </div>
  )
}

export default EditOrder