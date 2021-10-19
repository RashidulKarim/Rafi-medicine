import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const AllProducts = () => {
    const {products} = useProducts();
   
        return (
            <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">All Products</h2>
    
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {
                products.length && products?.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
      </div>
    </div>
        )
};

export default AllProducts;