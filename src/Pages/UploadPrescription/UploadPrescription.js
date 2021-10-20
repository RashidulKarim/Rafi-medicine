import React from 'react';

const UploadPrescription = () => {
    return (
        <div>
            <h2 className='text-2xl text-center my-2 font-bold'>Upload your prescription</h2>
            <div style={{backgroundColor:'#a29bfe'}} className='lg:w-1/4 md:w-2/4 sm:w-3/4 mx-auto border-2 bg-blue-300 px-12 my-4 py-4 rounded-xl'>
                <form className='mx-auto' action="">
                    <input className='border-2 my-2 p-2' type="text" placeholder='Full name' id="" /> <br />
                    <input className='border-2 my-2 p-2' type="email" placeholder='Email Address' id="" /> <br />
                    <input className='border-2 my-2 p-2' type="text" placeholder='Phone number' id="" /> <br />
                    <label htmlFor="file">Upload Prescription:</label> <br />
                    <input type="file"  className=' my-2 p-2' id="file" /> <br />
                    <textarea placeholder='Write your comment' className='border-2 my-2 p-2' name="" id="" cols="30" rows="5"></textarea> <br />
                    <input type="submit" value="Submit" className='bg-blue-700 p-2 rounded-lg text-white w-1/3' />
                </form>
            </div>
        </div>
    );
};

export default UploadPrescription;