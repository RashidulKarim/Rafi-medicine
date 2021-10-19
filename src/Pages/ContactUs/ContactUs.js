import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h2 className='text-2xl text-center border-b-2 my-8'>Contact Us</h2>
            <div className='w-full grid md:grid-cols-2 sm:grid-cols-1 justify-content-center '>
            <div>
            <form className="w-3/4 mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Rasdidul"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Karim"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                    <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                    </div>
                    <button className="shadow bg-teal-400 bg-black text-white ml-4 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Send
                    </button>
                </div>
                </form>
            </div>
                <div className='flex flex-col justify-center items-center mb-4'>
                     <h2 className='text-2xl font-bold pb-4'>Address</h2>
                    <div>
                    <p>Rafi Medicine Center</p>
                     <p> <a className='text-blue-500' href="https://www.google.com/maps/@23.7029218,90.4387296,19.18z" target='blank'>668 east Dholairpar, Kadamtoli, Dhaka-1236</a></p>
                     <p>Rashidul.karim7@gmail.com</p>
                     <p>01915555256</p>
                     <p>Working Hours: 9am - 12am</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;