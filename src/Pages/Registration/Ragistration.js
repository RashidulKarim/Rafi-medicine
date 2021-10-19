import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorName, setErrorName] = useState('')
  const history = useHistory();
  const location = useLocation();

    const {signUp ,signInWithGoogle, error, successMassage} = useAuth(); 

    const logInWithGoogle = () => {
      signInWithGoogle()
      .then(res => {
        history.push(location?.state?.from)
      })
    }

    const handleName = (e) => {
      const name = (e.target.value)
      if(name.length){
        setName(name)
        setErrorName('')
      }else{
        setErrorName("Please input your full name")
      }
    }

    const handleEmail = (e) => {
      const email = e.target.value;
      const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = emailRegex.test(email)
      if(isValid){
        setErrorEmail('')
        setEmail(e.target.value)
      }else{
        setErrorEmail('Please Input a Valid Email Address')
      }
    }

    const handlePassword = (e) => {
      const password = e.target.value
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      const isValid = passwordRegex.test(password)
      if(isValid){
        setErrorPassword('')
        setPassword(e.target.value)
      }else{
        setErrorPassword('Password Must contain 6-16 character and must contain one number and one special character.')
      }
    }


  return (
    <div 
   style={{height:"90vh"}} className='lg:w-1/3 sm:w-3/4 mx-auto my-20'>
       <div className='bg-black px-16 py-8 text-white'>
           <h2 className='text-3xl font-bold text-center py-4 text-white'> Please Register</h2>
            <div>
                <input onBlur={handleName} required className='bg-white text-black p-2 my-2 w-full' placeholder="Full Name" />
                <br />
                {
                    errorName&& <small className='text-red-500 '>{errorName}</small>
                }
                <input onBlur={handleEmail} className='bg-white text-black p-2 my-2 w-full' placeholder="Email"/>
                <br />
                {
                    errorEmail&& <small className='text-red-500 '>{errorEmail}</small>
                }
                <input onBlur={handlePassword} className='bg-white text-black p-2 my-2 w-full' type='password' placeholder="Password" />
                <br />
                {
                    errorPassword&& <small className='text-red-500 '>{errorPassword}</small>
                }
               <div className='w-3/4'>
               <button onClick={() => signUp(name, email, password)} className='text-black text-xl rounded-2xl bg-white font-bold p-1 w-2/4 mx-auto my-2 cursor-pointer'> Register</button>
               </div>
                {
                  error && <small className='text-red-500'>{error}</small>
                }
                {
                  successMassage && <small className='text-green-500'>{successMassage}</small>
                }
            </div>
            <p className='ml-2 text-right'>Already have an Account? Please <Link className='underline font-bold' to='/login'>Login</Link></p>
           <hr className='ml-2 mt-2' />
            <button onClick={logInWithGoogle} className='m-2 p-2 w-full bg-yellow-700 font-bold border-2 rounded-lg text-white'>Login With <FontAwesomeIcon icon={faGoogle} /> </button>
       </div>
   </div>
  );
};

export default Registration;