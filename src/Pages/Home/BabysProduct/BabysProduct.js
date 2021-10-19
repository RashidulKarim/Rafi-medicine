import React from 'react';
import { Link } from 'react-router-dom';

const BabysProduct = (props) => {
    const {id, name, price, img, quantity} = props.product;
    return (
        <div class="group relative border-4 p-4 rounded-xl">
        <div class="">
          <img src={img} alt="medicine" class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700 font-bold">
              <Link to={`/product/${id}`}>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {name}
              </Link>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Quantity: {quantity}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{price} Taka</p>
        </div>
      </div>
    );
};

export default BabysProduct;