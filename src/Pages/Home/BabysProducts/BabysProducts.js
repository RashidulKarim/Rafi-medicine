import React from 'react';
import useProducts from '../../../hooks/useProducts';
import BabysProduct from '../BabysProduct/BabysProduct';

const BabysProducts = () => {
    const {products} = useProducts();
    let matchedProduct;
    if(products.length){
        matchedProduct = products.filter(product => product.catagory === 'baby')
    }    
    return (
        <div>
  <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Baby Care Items</h2>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:gap-x-8">
        {
            matchedProduct?.map(product => <BabysProduct key={product.id} product={product}></BabysProduct>)
        }
    </div>
  </div>
</div>
    );
};

export default BabysProducts;