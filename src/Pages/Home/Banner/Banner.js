import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';


const Banner = () => {
    return (
        <div className='w-10/12 mx-auto mt-8'>
            <Carousel infiniteLoop autoPlay showIndicators={false} showThumbs={false}>
                <div>
                    <img src={banner1} alt='banner' />
                </div>
                <div>
                    <img src={banner2} alt='banner'  />
                </div>
                <div>
                    <img src={banner3} alt='banner'  />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;