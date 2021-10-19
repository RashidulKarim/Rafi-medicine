import { faFacebookSquare, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import appStore from '../../../images/appstore.png';
const Footer = () => {
    return (
        <div>
            <div className='pb-2 grid md:grid-cols-4 sm:grid-cols-2 justify-items-center bg-black text-white'>
           <div>
               <h2 className='font-bold text-xl my-2'>Our Policies</h2>
               <div className='text-gray-300'>
                   <p>Privacy Policy</p>
                   <p>Terms and Conditions</p>
                   <p>Editorial Policy</p>
                   <p>Return Policy</p>
                   <p>Ip Policy</p>
               </div>
           </div>
           <div>
               <h2 className='font-bold text-xl my-2'>Our Services</h2>
               <div className='text-gray-300'>
                   <p>Order Medicines</p>
                   <p>Book Lab Tests</p>
                   <p>Consult a Doctor</p>
                   <p>Care Plan</p>
                   <p>Articles</p>
               </div>
           </div>
           <div>
               <h2 className='font-bold text-xl my-2'>Connect</h2>
               <div>
                   <div>
                      <a href="https://www.facebook.com/" target='blank'><p className='-mx-8'>  <span className='text-blue-400 text-xl'> <FontAwesomeIcon  icon={faFacebookSquare} /></span><span className='pl-4'>Facebook</span></p></a>
                      <a href="https://twitter.com/" target='blank'><p className='-mx-8'>  <span className='text-blue-400 text-xl'> <FontAwesomeIcon  icon={faTwitter} /></span><span className='pl-4'>Twitter</span></p></a>
                      <a href="https://www.youtube.com/" target='blank'><p className='-mx-8'>  <span className='text-red-400 text-xl'> <FontAwesomeIcon  icon={faYoutube} /></span><span className='pl-4'>Youtube</span></p></a>
                      <a href="https://www.linkedin.com/" target='blank'>  <p className='-mx-8'>  <span className='text-black-400 text-xl'> <FontAwesomeIcon  icon={faLinkedin} /></span><span className='pl-4'>LinkedIn</span></p></a>
                   </div>
               </div>
           </div>
           <div>
               <h2 className='font-bold text-xl my-2 py-2 text-center'>Download App</h2>
               <div  className='flex justify-center items-center'>
                 <img src={appStore} className='w-3/5' alt="" />
               </div>
           </div>
        </div>
        <p className='text-center'>&copy; 2021, All Right Reserved By Rashidul Karim.</p>
        </div>
    );
};

export default Footer;