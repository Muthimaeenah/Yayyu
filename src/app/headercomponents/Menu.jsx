"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    let [dropdownOpen, setDropdownOpen] = useState(false)
    let [menuOpen, setMenuOpen] = useState(false)

  return (
    <div >
       <Image src="/menuicon.png" alt='menu' width={28} height={28} className='cursor-pointer bg-white'
          onClick={() => setMenuOpen(!menuOpen)} 
        />
        {menuOpen && (
          <div className='bg-white absolute text-black left-0 top-28 w-full h-{calc(100vh-80px)} flex flex-col items-center justify-center gap-8 text-xl z-10'>
             <Link href="/" className="text-xs mt-6">HOME</Link>
             <Link href="/about" className="text-xs">ABOUT US</Link>

                {/* Shop Dropdown */}
                <div className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-xs"> SHOP </button>
                        {dropdownOpen && (
                          <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">
                            <Link href="/shop/electronics" className="block px-4 py-2">Electronics</Link>
                            <Link href="/shop/clothing" className="block px-4 py-2">Clothing</Link>
                            <Link href="/shop/accessories" className="block px-4 py-2">Accessories</Link>
                          </div>
                        )}
                </div>

                <Link href="/contact" className="text-xs">CONTACT</Link>
            
                <Image src="/profile.png" alt="Persona Icon" className="h-6 w-6 bg-white"/>
          
               <Image src="/like.png" alt="like Icon" className="h-6 w-6"/>
          
                 <Image src="/search.png" alt="search Icon" className="h-6 w-6"/>
                 <Image src="/cart.png" alt="cart Icon" className="h-6 w-6"/> 
          </div>
        )}
    </div>
  )
}

export default Menu