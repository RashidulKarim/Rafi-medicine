import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';

const SingleProduct = () => {
    const {id} = useParams();
    const {products} = useProducts();
    let matchedProduct;
    if(products.length){
        matchedProduct = products.find(product => product.id === +id)
    }
    return (
        <div className='flex justify-center items-center flex-row py-8'>
               <div className='w-6/12 mx-auto'>
               <img src={matchedProduct?.img} alt="" />
                <h3 className='text-3xl font-bold py-2'>{matchedProduct?.name}</h3>
                <p className='text-md pb-1'>Price: <span className='font-bold'>{matchedProduct?.price} Taka</span></p>
                <p className='text-md pb-1'>Quantity: <span className='font-bold'>{matchedProduct?.quantity}</span></p>
                <p className='text-md pb-1'>Category: <span className='font-bold'>{matchedProduct?.catagory}</span></p>
                <p className='text-md pb-1 text-gray-500 text-justify'>Description: {matchedProduct?.description}</p>
               </div>
        </div>
    );
};

export default SingleProduct;