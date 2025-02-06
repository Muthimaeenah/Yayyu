import Image from 'next/image'
import React from 'react'
import adire from '../../assets/cloth.png'
import { BsSliders } from "react-icons/bs";
import { TbCurrencyNaira } from "react-icons/tb";


const Category = () => {
  return (
    <div className='mx-40 my-28 pb-12border-2 border-black'>
      <h4 className='font-semibold text-5xl pb-10'>Adire</h4>
      
      <div className='py-8 flex justify-between w-36 font-semibold'>
       <BsSliders/>
       <p className='text-base'>SHOW FILTER</p>
      </div>

      <div className='py-12 grid grid-cols-4 gap-12'>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=''>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=''>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=''>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=''>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=' '>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>

       <div className=''>
         <Image src={adire} alt='adire'/>
         <div className='mt-4 pl-8 '>
           <p className='text-xs font-400 font-dmSans text-left'>THE ADIRE ATTIRE</p>
            <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
          </div>
       </div>
       
        
      </div>

      <div className='flex justify-between'>
        <p>Previous</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>67</p>
        <p>68</p>
        <p>Next</p>
      
      </div>
    </div>
  )
}

export default Category