import Image from 'next/image';
import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

const Homecart = () => {
  return (
    <div className='h-3/5 bg-white p-4 m-12'>
        <h4 className='text-2xl font-400 font-dmSans leading-8'>NEW ARRIVALS</h4>

        <div className='mt-12 grid grid-cols-4 gap-8'>
            <div >
                <Image src="/cloth.png" alt="cloth"  width={250} height={250} className='' />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div >
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div >
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div>
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div >
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div >
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div >
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>

            <div >
                <Image src="/cloth.png" alt="cloth" width={250} height={250} />
                <div className='mt-4 ml-14 '>
                    <p className='text-sm font-400 font-dmSans leading-4'>THE ADIRE ATTIRE</p>
                    <h5 className='font-serif text-xl flex pt-1'><TbCurrencyNaira className='h-7 w-6'/>150,000.00</h5>
                </div>
            </div>
        </div>
        <button className='bg-black text-white px-16 py-5 mt-8 mx-96 hover:bg-slate-700'> VIEW ALL</button>
    </div>
  )
}

export default Homecart