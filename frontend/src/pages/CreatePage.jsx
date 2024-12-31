import { Button } from '@headlessui/react'
import React, { useState } from 'react'
import { useProductStore } from '../../store/product'


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const { createProduct} = useProductStore();
  const handleNewProduct = async () => {

    console.log('newProduct', newProduct);
    const {success, message} = await createProduct(newProduct);
    console.log(success,"success");
    console.log(message, "message");
    setNewProduct({name: "", price: "", image: "",})
  }
  return (
    // <div className="mx-auto my-40 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="container mx-auto my-40 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl my-4 font-bold">Create New Product</h1>
        </div>

        <label htmlFor="price" className="flex text-sm/6 font-medium text-gray-900">
          Product Name
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              id="name"
              name="name"
              value={newProduct.name}
              type="text"
              placeholder="Enter Product Name"
              onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})}
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>


        <label htmlFor="price" className="flex text-sm/6 font-medium text-gray-900">
          Price
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">$</div>
            <input
              id="price"
              name="price"
              type="text"
              value={newProduct.price}
              placeholder="0.00"
              onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})}
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>


        <label htmlFor="price" className="flex text-sm/6 font-medium text-gray-900">
          Image
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              id="image"
              name="image"
              type="text"
              placeholder="Enter Image URL"
              value={newProduct.image}
              onChange={(e)=> setNewProduct({...newProduct, image: e.target.value})}
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button className='mt-4 bg-gray-500 p-2 my-2' onClick={handleNewProduct}>
            <text className='text-white'> Create Product </text>
          </button>
        </div>
      {/* </div> */}


    </div>

  )
}

export default CreatePage
