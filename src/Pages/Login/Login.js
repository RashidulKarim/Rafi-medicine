import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, signIn, error, successMassage} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const history = useHistory();
    const location = useLocation();
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
    setPassword(e.target.value)
  }

  const logInWithGoogle = () => {
    signInWithGoogle()
    .then(res => {
      history.push(location?.state?.from)
    })
  }

  const logIn = () => {
    if(email){
      signIn(email, password)
    .then(res => {
      history.push(location?.state?.from)
    })}
  }
  return (
   <div 
   style={{height:"90vh"}} className='lg:w-1/3 sm:w-3/4 mx-auto my-20'>
      <div className='bg-black px-16 py-8 text-white'>
           <h2 className='text-3xl font-bold text-center py-4 text-white'> Please Login</h2>
            <div>
                <input onBlur={handleEmail} className='bg-white text-black p-2 m-2 w-full' placeholder="Email"/>
                <br />
                  {
                    errorEmail&& <small className='px-2 text-red-500 '>{errorEmail}</small>
                  }
                <input onBlur={handlePassword} className='bg-white text-black p-2 m-2 w-full' type='password'  placeholder="Password" />
                <br />
                <button style={{background: "linear-gradient(90deg, #f2994a 0%, #f2c94c 100%)"}} onClick={logIn} className='bg-white text-xl rounded-2xl text-black font-bold p-2 m-2 w-full cursor-pointer'> Login</button>
            </div>
            <p className='ml-2 text-right'>Don't have an account? Please <Link className='underline font-bold' to='/register'>Register</Link></p>
           <hr className='ml-2 mt-2' />
            <button style={{backgroundColor:'#6c5ce7'}} onClick={logInWithGoogle} className='m-2 p-2 w-full font-bold border-2 rounded-lg text-white'>Login With Google </button>
            {
                  error && <small className='text-red-500'>{error}</small>
                }
                {
                  successMassage && <small className='text-green-500'>{successMassage}</small>
                }
       </div>
   </div>
  );
}
export default Login;