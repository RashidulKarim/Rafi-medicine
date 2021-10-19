import React from 'react';
import { Link } from 'react-router-dom';

const PrescriptionProduct = (props) => {
    const {id, name, price, img, quantity} = props.product;
    return (
        <div className="group relative border-4 p-4 rounded-xl">
        <div className="">
          <img src={img} alt="medicine" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 font-bold">
              <Link to={`/product/${id}`}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Quantity: {quantity}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price} Taka</p>
        </div>
      </div>
    );
};

export default PrescriptionProduct;