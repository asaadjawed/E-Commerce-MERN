import React, { useEffect } from 'react'
import '../App.css'
import { useProductStore } from '../../store/product'
import { ProductCard } from '../components/ProductCard';

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct])
  console.log(products, "products");
  return (
    <div className="container mx-auto my-40 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Current New Product</h1>
      </div>

      <div className="container-grid">
        {
          products.map((product) => {
            return <ProductCard key={product._id} product={product} />

          })
        }
      </div>

      {products.length == 0 && (
        <>
          <div className=''>
            <p className='pt-12'>No Product Found:

              <span className='text-blue-300'><a href='/create'> Create a Product </a></span>
            </p>
          </div>
        </>
      )}

    </div>
  )
}

export default HomePage
