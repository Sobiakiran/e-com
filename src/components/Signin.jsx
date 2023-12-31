import React from 'react'
import { Link } from 'react-router-dom';
import ForgetPassword from './ForgetPassword';

const Signin = () => {
  return (
    <div>
      

      
<div className='bg-[#125966] flex justify-center item-center overflow-hidden h-auto md:py-[10%] '>
  <div className='bg-[#cce6e2] flex justify-center items-center w-[40%] h-[90%] shadow-md '>
    <div className='w-[90%] md:w-[70%] h-[80%] text-center my-8'>
      <p className='my-2 md:my-4 text-[1rem] font-neon md:text-[2rem] font-semibold text-navy'>
        Log in to your Account
      </p>

      <form className='flex flex-col gap-4 ' action="">

        <input type="email" name='email' placeholder='enter your email' className='mt-2 border-b-2 focus:outline-none 2xl:py-4 border-[#125966] bg-transparent placeholder:text-slate-500 value' />

        <div className='text-red -700 text-start font-semibold 2xl:text-lg'></div>

        <div className='relative'>
        <input type="password" name='password' placeholder='password' className='mt-2 ml-0 w-full  border-b-2 focus:outline-none 2xl:py-4 border-[#125966] bg-transparent placeholder:text-slate-500 value' />
          <div className='absolute text-navy curser-pointer right-0 top-2'>
            {/* password  icon */}
          </div>
        </div>

        <p htmlFor='terms' className='m-2 underline underline-offset-4 hover:text-[] text-navy font-semibold'>
          <Link to="/ForgetPassword"> 
          Forget Password
          </Link>
        </p>

        <div className='flex gap-2 '>
          <input type="checkbox" name='terms' value />
          <label htmlFor="terms">
            I agree with terms and Conditions
          </label>
        </div>

        <div className='text-red -700 text-start font-semibold 2xl:text-lg'></div>

        <div className='grid text-[#125966] hover:font-semibold hover:text-navy '>
          <button type='submit' className='bg-navy hover:bg-white self-center 2xl:text-xl w-[35%] justify-self-center p-2 2xl:p-4'>
            LogIn
          </button>
        </div>


    </form>
    <div className='flex justify-center items-center gap-2 my-4'>
      <p className=''>Don't have an account yet?</p>
      <Link to="/signup">
          <button className='font-semibold underline underline-offset-4 text-navy hover:text-cgreen'>SignUp</button>
      </Link>
    </div>
    </div>
    
  </div>
</div>


    </div>
  )
}

export default Signin
