import React from 'react'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div>
      

<div className='bg-[#cce6e2] z-10 relative flex justify-center items-center h-screen overflow-hidden'>
    <div className='bg-[#1d7889] h-[60%] rounded-md text-center shadow-md flex items-center justify-center flex-col w-[40%]'>
        <div className='w-[80%] grid gap-4'>
            <p className='my-2 text-lg md:text-[1.5rem] lg:text-[2rem] 2xl:text-[3rem] text-gray-200 font-semibold font-neon '>
                Enter your Registered email
            </p>
            <p className='my-2 text-lg text-white font-lora'>
                We are going to send an Otp to your Account please verify that otp
            </p>

            <form action="" className='flex flex-col gap-4 '>
                <input type="email" name='email' placeholder='email' className='p-2 rounded-md focus:ring-2 ' />
                <div className='text-red-[6] text-start text-red-800 font-semibold 3xl:text-lg'></div>

                <div className='grid text-white hover:font-semibold hover:text-[#1d7889]'>
                    <button type='submit' className='bg-[#072963] hover:bg-white self-center 2xl:text-xl w-[35%] justify-self-center p-2 2xl:p-4'>
                        Send Otp
                    </button>
                </div>
            </form>

            <Link to="/signin" className='text-md text-white hover:text-[neavy] curser-pointer underline underline-offset-4 font-semibold'>Back to LogIn</Link>
        </div>
    </div>
</div>

    </div>
  )
}

export default ForgetPassword
