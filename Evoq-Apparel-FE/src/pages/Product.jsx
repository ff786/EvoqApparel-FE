import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../assets/products';

const Product = () => {
    const {id} = useParams();

    const currentProduct = products.find((product) => product.id === parseInt(id));
    
  return currentProduct && (
    <div className='grid md:grid-cols-2 gap-8  lg:gap-28 mt-12 px-4 sm:px-16  lg:px-20'>
        {/* Display Image */}
      <div className=' flex justify-center items-center'>
    <img src={currentProduct.image} alt="Evoq Product Image" className='w-auto' />
      </div>
      <div className='flex flex-col gap-4 px-4 sm:px-12'>
        <h1 className='text-2xl font-semibold'>{currentProduct.name}</h1>
        <p>{currentProduct.description}</p>
      </div>
    </div>
  )
}

export default Product
