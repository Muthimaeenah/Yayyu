'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Navicons = () => {
  let [isProfileOpen, setIsProfileOpen] = useState(false)
  let [isSearchOpen, setIsSearchOpen ] = useState(false)
  let [isWishlistOpen, setIsWishlistOpen ] = useState(false)
    
  // temporary login function

  const isLoggedIn = false;

  const handleProfile = () => {
   const router = useRouter();
    if(!isLoggedIn){
      router.push('/login');
    }
      
  }

  //search function
  const handleSubmit = (e) => {
      const router = useRouter();
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get("name");

      if(name){
        router.push(`/search?name=${name}`)
      }
  }
  

  return (
    <div className="flex items-center space-x-6  md:flex relative">
      
      <Image src="/profile.png" alt="Persona Icon" width={24} height={24} className="cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}/>
        {isProfileOpen &&(
          <div>
            <ul className='absolute left-0 mt-2 p-4 w-48 bg-white text-gray-900 rounded-md shadow-lg'>
              <li className='cursor-pointer' onClick={handleProfile}>PROFILE</li>
              <li className='mt-2 cursor-pointer'>SIGNUP</li>
              <li className='mt-2 cursor-pointer'>LOGIN</li>
            </ul>
          </div>          
        )}

      <Image src="/like.png" alt="like Icon" width={24} height={24} className="cursor-pointer" onClick={() => setIsWishlistOpen(!isWishlistOpen)}/>
        {isWishlistOpen &&(
          <div>
            <ul className='absolute left-0 mt-2 p-4 w-48 bg-white text-gray-900 rounded-md shadow-lg'>
              <li className='cursor-pointer'>PROFILE</li>
              <li className='mt-2 cursor-pointer'>SIGNUP</li>
              <li className='mt-2 cursor-pointer'>LOGIN</li>
            </ul>
          </div>          
      )}

      <Image src="/search.png" alt="search Icon" width={24} height={24} className="cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)}/>
        {isSearchOpen &&(
          <div className='absolute left-0 mt-2 p-4 w-48 bg-white text-gray-900 rounded-md shadow-lg'>
            <form className='flex justify-center items-center gap-4 p-2 rounded-md flex-1' onSubmit={handleSubmit}>
              <input type="text" name='name' placeholder='Search' className='flex-1 bg-transparent outline-none'/>
              <button className='cursor-pointer'>
                <img src="/search.png" alt="search Icon" className="h-6 w-6 cursor-pointer" />
              </button>
            </form>
          </div>          
      )} 

      <Image src="/cart.png" alt="cart Icon" width={24} height={24} className="cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}/>
        {isProfileOpen &&(
          <div>
            <ul className='absolute left-0 mt-2 p-4 w-48 bg-white text-gray-900 rounded-md shadow-lg'>
              <li className='cursor-pointer'>PROFILE</li>
              <li className='mt-2 cursor-pointer'>SIGNUP</li>
              <li className='mt-2 cursor-pointer'>LOGIN</li>
            </ul>
          </div>          
    )}  
    </div>

  )
}

export default Navicons