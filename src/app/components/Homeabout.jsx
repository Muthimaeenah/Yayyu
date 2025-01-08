import React from 'react'
import { BsChevronRight } from "react-icons/bs";

const Homeabout = () => {
  return (
    <div className='h-345 bg-white p-4 m-12'>
        <div className='flex justify-between'>
            <h4 className='font-400 text-xl leading-6 font-dmSans'>ABOUT US</h4>
            <p className='font-500 text-xl leading-6 mr-2 flex cursor-pointer font-dmSans'>Learn More <BsChevronRight className='pl-2 pt-2'/></p>
        </div>
        <div className='pt-8'>
            <h4 className='font-400 text-3xl italic leading-10 font-serif'>
             To provide sustainable clothing for both <br /> formal and informal occasions. 
            </h4>
            
            <div className='flex justify-between'>
              <p className='w-custom pt-6 font-400 font-dmSans '>
                 We are dedicated to crafting garments using only the finest materials, emphasizing durability and elegance. Each piece in our collection is thoughtfully designed with exceptional craftsmanship, allowing you to express your individuality while feeling confident and comfortable.
               </p>
               <p className='pt-20 w-40 text-base font-dmSans font-400 text-right'>
                  DISCOVER THE POWER OF BEAUTY
               </p>
            </div>
           
        </div>
        <p className='font-500 text-xl leading-6 flex py-8 cursor-pointer font-dmSans'>Learn More<BsChevronRight className='pl-2 pt-2'/></p>
    </div>
  )
}

export default Homeabout