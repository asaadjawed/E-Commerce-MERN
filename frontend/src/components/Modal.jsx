'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useProductStore } from '../../store/product'


export default function Modal({ open, setOpen, product }) {

    const [updatedProduct, setUpdatedProduct] = useState(product);
    const { updateProduct } = useProductStore();

    const handleUpdatedProduct = async (pID, updatedProduct) => {
        await updateProduct(pID, updatedProduct)
        setOpen(false);
    }

    console.log(product, 'getProduct');
    console.log(open, 'openMain');
    console.log(setOpen, 'setOpenMain');

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start flex-col">
                                <label htmlFor="price" className="flex text-sm/6 font-medium text-gray-900">
                                    Product Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={updatedProduct.name}
                                            placeholder="Enter Product Name"
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start flex-col">
                                <label htmlFor="price" className="flex text-sm/6 font-medium text-gray-900">
                                    Product Price
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={updatedProduct.price}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                            placeholder="Enter Product Name"
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start flex-col">
                                <label htmlFor="price" className="flex text-sm/6 font-medium text-gray-900">
                                    Product Image
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={updatedProduct.image}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                            placeholder="Enter Product Name"
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => handleUpdatedProduct(product._id, updatedProduct)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
