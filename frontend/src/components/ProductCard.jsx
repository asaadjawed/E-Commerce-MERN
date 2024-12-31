import React, { useState } from "react"
import { useProductStore } from "../../store/product"
import Modal from "./Modal"

export const ProductCard = ({ key, product }) => {

    const { deleteProduct } = useProductStore()
    const [open, setOpen] = useState(false)
    
    const handleModal = () => {
        // e.preventDefault();
        setOpen(!open)
        
    }
    console.log('openInsideFunc', open)

    const handleDeleteProduct= async (pid)=> {
        const {success, message} = await deleteProduct(pid)
    }

    console.log('productCHeck', product)
    return (
        <>
            <div className="card">
                <div className="">
                    <img className="image_box" src={product.image} /></div>
                <div className="container-card">
                    <h4 className="text-gray-400">{product.name}</h4>
                    <p><b>{product.price}</b></p>

                    <div className="flex justify-center align-center flex-col">
                        <button className="text-lg bg-gray-400 rounded-full my-2" onClick={() => handleModal() }>Edit</button>
                        <button className="text-lg bg-gray-400 rounded-full" onClick={() => handleDeleteProduct(product._id) }>Delete</button>
                    </div>
                </div>
            </div>

            {
                open && (
                    <Modal open={open} setOpen={setOpen} product={product} />
                )
            }
        </>
    )
}