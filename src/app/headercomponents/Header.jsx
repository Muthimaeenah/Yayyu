"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navicons from './Navicons';
import Menu from './Menu';
import { IoChevronDown } from "react-icons/io5";



const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className='bg-white text-black p-4 relative h-20'>
      <div className='hidden md:flex mx-auto px-4 py-3 justify-between items-center'>

        {/* First Div - Navigation Links */}
        <div className="flex items-center space-x-6  md:flex">
              <Link href="/" className="text-xs">HOME</Link>
              <Link href="/about" className="text-xs">ABOUT US</Link>

              {/* Shop Dropdown */}
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-xs flex gap-1"> SHOP <IoChevronDown /></button>
                 {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">
                           <Link href="/shop/collection" className="block px-4 py-2">Collection</Link>
                           <Link href="/shop/category" className="block px-4 py-2">Category</Link>
          
                    </div>
                )}
              </div>

             <Link href="/contact" className="text-xs">CONTACT</Link>
        </div>

        {/* Second Div - Logo */}
        <div>
          <Image src='/logo.png' alt='logo' width={100} height={52}/>
        </div>

        {/* Third Div - Icons */}
        <Navicons/>

      </div>
 
      {/* Mobile Menu */}
      <div className='md:hidden sm:flex  items-center justify-between relative h-full'>
        <Image src='/logo.png' alt='logo' width={80} height={30}/>
        <Menu/>
      </div>

    </nav>
  )
}

export default Header