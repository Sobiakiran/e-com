import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      {/* Register form */}


<div className='bg-[#125966] flex justify-center item-center overflow-hidden h-auto md:py-[10%] '>
  <div className='bg-[#cce6e2] flex justify-center items-center w-[40%] h-[90%] shadow-md '>
    <div className='w-[90%] md:w-[70%] h-[80%] text-center my-8'>
      <p className='my-2 md:my-4 text-[1rem] font-neon md:text-[2rem] font-semibold text-navy'>
        Create your Account
      </p>

      <form className='flex flex-col gap-4 ' action="">
        <input type="text" name='userName' placeholder='Enter your full Name' className='mt-2 border-b-2 focus:outline-none 2xl:py-4 border-[#125966] bg-transparent placeholder:text-slate-500 value' />

        <div className='text-red -700 text-start font-semibold 2xl:text-lg'></div>

        <input type="email" name='email' placeholder='enter your email' className='mt-2 border-b-2 focus:outline-none 2xl:py-4 border-[#125966] bg-transparent placeholder:text-slate-500 value' />

        <div className='text-red -700 text-start font-semibold 2xl:text-lg'></div>

        <div className='relative'>
        <input type="password" name='password' placeholder='password' className='mt-2 ml-0 w-full  border-b-2 focus:outline-none 2xl:py-4 border-[#125966] bg-transparent placeholder:text-slate-500 value' />
          <div className='absolute text-navy curser-pointer right-0 top-2'>
            {/* password  icon */}
          </div>
        </div>

        <div className='relative'>
        <input type="password" name='confirmPassword' placeholder='confirmPassword' className='m-2 ml-0 w-full  border-b-2 focus:outline-none 2xl:py-4 border-[#125966] bg-transparent placeholder:text-slate-500 value' />
          <div className='absolute text-navy curser-pointer right-0 top-2'>
            {/* password  icon */}
          </div>
        </div>

        <div className='flex gap-2 '>
          <input type="checkbox" name='terms' value />
          <label htmlFor="terms">
            I agree with terms and Conditions
          </label>
        </div>

        <div className='text-red -700 text-start font-semibold 2xl:text-lg'></div>

        <div className='grid text-[#125966] hover:font-semibold hover:text-navy '>
          <button type='submit' className='bg-navy hover:bg-white self-center 2xl:text-xl w-[35%] justify-self-center p-2 2xl:p-4'>
            Sign Up
          </button>
        </div>


    </form>
    <div className='flex justify-center items-center gap-2 my-4'>
      <p className=''>Already have an account?</p>
      <Link to="/signin">
          <button className='font-semibold underline underline-offset-4 text-navy hover:text-cgreen'>LogIn</button>
      </Link>
    </div>
    </div>
    
  </div>
</div>

      
    </div>
  )
}

export default Signup
