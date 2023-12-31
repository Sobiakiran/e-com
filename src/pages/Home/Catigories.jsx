import React, { useState } from 'react'
import {FiChevronsRight } from 'react-icons/fi'

const Catigories = () => {
    const [hover, setHover] = useState(false)
  return (
    <div>

      <div className='bg-[#e5f3fd] sm:flex flex-col px-5 md:grid lg:grid-cols-12 gap-5 '>

       <div className='col-span-6'>
       <div className="flex flex-col sm:items-center sm:justify-around md:items-start justify-center gap-5 py-5 w-[80%] mx-auto">
              <h1 class="title-font   text-5xl font-bold text-[#50d6c2] ">
              TOP  <br /> <br />
              CATEGORIES
              </h1>
            
              <p class="mb-8 mt-5 leading-relaxed text-black text-lg">
              Our curated top categories feature a wide range of choices, ensuring there's something for everyone.
              </p>

              <button class="w-40 h-40 rounded-full border-2 border-black text-black flex items-center justify-center  hover:bg-blue-950  hover:text-white" >
                Broswe More 
                <FiChevronsRight size={16} />
              </button>
            </div>
        </div>

        <div className="py-5  md:col-span-6 h-full bg-[#aab4bd] lg:col-span-6">
          <img className='h-[100%]' src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/fragrences.583ad57311574a9ec764.jpg" alt="" />
    </div>            
       
        
        
        <div className='py-5 md:col-span-3 lg:col-span-3 '>
            <img className='w-[100%] h-[350px]'
             src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/jwellery.4f5940afcb086d23125d.jpg" alt="" />
        </div>
        <div className='py-5 md:col-span-6 lg:col-span-6'>
            <img className='w-[100%] h-[350px]'
            src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/shoes.713db7a4b7edb5dd65e2.jpg" alt="" />
        </div>
        <div className='py-5 md:col-span-3 lg:col-span-3 '>
            <img className='w-[100%] h-[350px]'
            src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/watches.f2b1476e83259edc3f8d.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Catigories
