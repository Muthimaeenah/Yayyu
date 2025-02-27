import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-auto bg-secondary-400'>
    
      <div className='grid grid-cols-5 px-16 pt-10 pb-4 font-dmSans'>
        <div className=''>
          <Image src='/logo.png' width={100} height={45}/>
        </div>

        <ul className='list-none font-medium cursor-pointer flex flex-col'>
          <li className=''>QUICK LINK</li>
          <Link href="/" className="pt-3">Home</Link>
          <Link href="/shopComponent/category" className="pt-2">Categories</Link>
          <Link href="/about" className="pt-2">About Us</Link>
          <Link href="/contact" className="pt-2">Contact</Link>
          <Link href="/legal/faq" className="pt-2">FAQs</Link>
        </ul>

        <ul className='list-none font-medium cursor-pointer flex flex-col'>
          <li className=''>LEGAL</li>
          <Link href="/legal/privacy" className="pt-3">Privacy Policy</Link>
          <Link href="/legal/shipping" className="pt-2">Shipping Policy</Link>
          <Link href="/legal/delivery" className="pt-2">Delivery Policy</Link>
          <Link href="/legal/return" className="pt-2">Return Policy</Link>
        </ul>

        <div>
          <p>FOLLOW US ON</p>
          <div className='flex text-2xl space-x-1  '>
           <FaFacebook className='cursor-pointer hover:text-3xl'/>
           <FaInstagramSquare className='cursor-pointer hover:text-3xl' />
           <AiFillTikTok className='cursor-pointer hover:text-3xl' />
           <FaSquareXTwitter className='cursor-pointer hover:text-3xl' />
           <FaLinkedin className='cursor-pointer hover:text-3xl' />
          </div>
        </div>

        <div>
          <p>JOIN OUR COMMUNITY</p>
          <input type="email" name="email" id="email" placeholder='Email Address' className='p-2' />
          <button className='bg-black text-white my-2 p-3 w-full hover:bg-slate-700'>Subscribe</button>
          <p className='text-xs'>Join the Yayyu community for exclusive access, special offers, and early notifications about our new collections!</p>
        </div>
      </div>

      <hr className='border-1 border-black'/> 
      <p className='text-center py-4 cursor-pointer'>Copyright © 2024 Yayyu LifeStyle</p>
    
    </div>
  )
}

export default Footer