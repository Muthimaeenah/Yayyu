import Image from 'next/image'
import React from 'react'
import aboutimg from '../assets/about.png';
import abtimg2 from '../assets/abtimg2.png';

const about = () => {
  return (
    <div>
        
        <Image src={aboutimg} alt='about'/>

        <div className='px-40 pt-8 pb-40'>
            <Image src={abtimg2} alt='about'/>
            <div className='font-dmSans text-xl pt-8'>
                <p>
                  At YAYYU, we believe that every woman deserves to feel both comfortable and stylish, 
                  no matter the occasion. Our mission is to provide sustainable clothing options that 
                  blend elegance with modern design, suitable for both formal and informal settings. 
                </p> 
                <br />
                <p>
                  We are committed to using only the finest materials and delivering exceptional designs
                   that reflect our dedication to quality. Our collections feature modest yet fashionable 
                   styles with clean cuts, ensuring that each piece enhances your wardrobe.
                </p>
                <br />
                <p > 
                   As a socially empowered team, we strive to make shopping easy and enjoyable through 
                   our thoughtfully crafted designs and fast, seamless delivery. We aim to inspire women 
                   across the globe to embrace their unique style and wear pieces that make them feel their
                   best, always.
                </p>

            </div>
           
           
        </div>
    </div>
  )
}

export default about