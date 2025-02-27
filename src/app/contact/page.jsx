import React from 'react'
import Image from 'next/image';
import contactImg from "../assets/contact.png"

const Contact = () => {

  return (
    <div>
      <div className='w-full'>
        <Image src={contactImg} alt='contact' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>
      </div>

      <div className="max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32">
              
        <div className='mt-14 container'> 
          <div className='flex items-top gap-x-14 sm:flex-col lg:flex-row gap-y-5 '>
            <div className='lg:w-1/2 sm:w-full mb-12'>
              <form>
                {/* Name form */}
                <div className='mb-3'>
                  <label htmlFor="Name" className='text-[14px] font-medium'>First name</label><br/>
                  <input type="text" placeholder='First name' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>

                {/* Email form */}
                <div className='mb-3'>
                  <label htmlFor="email" className='text-[14px] font-medium'>E-mail</label><br/>
                  <input type="email" placeholder='email' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>

                {/* textbox */}
                <div className='mb-3'>
                  <label htmlFor="enquiry" className='text-[14px] font-medium'>Enquiry</label><br/>
                  <textarea name="text" id="enquiry" className='border-2 p-[10px] rounded-[4px] w-full'></textarea>
                </div>

                <button className='bg-black hover:bg-secondary-300 hover:text-black text-white w-full py-4'>Send</button>

              </form>
            </div>

            <div className='font-normal text-[20px] lg:w-1/2 sm:w-full sm:text-center lg:text-left'>
                    <p>Gbagada</p>
                    <p>+234 812 0000 0000</p>
                    <p>info@yayyulifestyle.com</p>
            </div>

          </div>

                
        </div>

      </div>

    </div>
    
  )
}

export default Contact