import React from 'react';
import useProducts from '../../../hooks/useProducts';
import DiabetesProduct from '../DiabetesProduct/DiabetesProduct';

const DiabetesProducts = () => {
    const {products} = useProducts();
    let matchedProduct;
    if(products.length){
        matchedProduct = products.filter(product => product.catagory === 'diabetes')
    }    
    return (
        <div>
  <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Diabetes Medicine</h2>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {
            matchedProduct?.map(product => <DiabetesProduct key={product.id} product={product}></DiabetesProduct>)
        }
    </div>
  </div>
</div>
    );
};

export default DiabetesProducts;