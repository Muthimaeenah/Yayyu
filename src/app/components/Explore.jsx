import Image from 'next/image'
import React from 'react'
import suit from '../assets/suit.png';
import adire from '../assets/Component 7.png';
import kaftan from '../assets/Component 8.png';
import gown from '../assets/Component 9.png';

const Explore = () => {
  return (
    <div className=' p-4 m-12'>
        <h4 className='text-2xl font-400 font-dmSans leading-8'>EXPLORE MORE </h4>
        <div className='grid grid-cols-2 gap-6 mt-6'>
          <Image src={suit}  alt='suit'/>
          <Image src={adire} alt='adire'/> 
          <Image src={kaftan} alt='kaftan'/>
          <Image src={gown} alt='gown'/>  
        </div>
    </div>
  )
}

export default Explore