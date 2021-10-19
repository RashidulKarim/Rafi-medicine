import React from 'react';
import image3 from '../../../images/banner/call-center.png';
import image1 from '../../../images/banner/delivery-service-new.png';
import image2 from '../../../images/banner/online-doctor.png';

const ServiceBanner = () => {
    return (
        <div>
             <div className='my-16 grid md:grid-cols-3 sm:grid-cols-1 justify-items-center items-center w-11/12 mx-auto'>
                    <div className='relative my-8'>
                        <img src={image1} alt="" />
                        <h2 className='text-2xl
                        text-center absolute top-0 font-bold text-red-500 left-20'>Upload Your Prescription</h2>
                    </div>
                    <div className='relative my-8'>
                        <img src={image2} alt="" />
                        <h2 className='text-2xl
                        text-center absolute top-0 font-bold text-red-500 left-20 '>Online Doctor</h2>
                    </div>
                    <div className='relative my-8'>
                        <img src={image3} alt="" />
                        <h2 className='text-2xl
                        text-center absolute top-0 font-bold text-red-500 left-20 '>24/7 Help Line</h2>
                    </div>
            </div>
        </div>
    );
};

export default ServiceBanner;