'use client';
import Image from 'next/image'
import categoryimg from '../../assets/category.png'
import React, { useState } from 'react'
import adire from '../../assets/cloth.png'
import { BsSliders } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



const Category = () => {
  const [filter, setFilter] = useState(false); // State for filter visibility
  const [sortOrder, setSortOrder] = useState('NEWEST'); // State for sortby dropdown 
  const [priceRange, setPriceRange] = useState(50000); // State for price range
  const [currentPage, setCurrentPage] = useState(1);
  // pagination
  //const totalPages = Math.ceil(ProductDatas.length / ITEMS_PER_PAGE);
 

  const handleSelection = (order) => {
    setSortOrder(order);
    setIsDropdownVisible(false); // Close dropdown after selection
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value); 
  };
  
  //totalPages = 68;  // total number of pages
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  //const currentProducts = ProductDatas.slice(startIndex, startIndex + ITEMS_PER_PAGE);


  return (
   <div>

     <div>
        <Image src={categoryimg} alt='category img'/>
      </div> 
      <div className='mx-40 my-16 pb-8'>

        <h4 className='font-bold text-5xl pb-8'>Adire</h4>
      
       <div className='flex items-center justify-between'>
       {/*  filter dropdown */}
      
        <div className="relative">
          <button onClick={() => setFilter(!filter)}  className='py-8 flex gap-4 font-semibold'>
            <BsSliders/>
            <p className='text-base'>SHOW FILTER</p>
          </button>
            {filter && (
              <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-10 transition-transform duration-300 ${filter ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='p-4'>
                  <div className='flex items-center justify-between py-2 shadow-md text-base'>
                    <p className='text-base'>FILTERS</p>
                   <button onClick={() => setFilter(!filter)} ><IoMdClose  /></button>
                  </div>

                  <div className='mt-4'>
                    <div className="mt-4 border-b-2 py-3 Mb-7">
                      <label htmlFor="category">
                       <select name="category" id="category" className='w-full py-2'>
                          <option value="All">CATEGORY </option>
                          <option value="KAFTAN" className='pt-2'>KAFTAN</option>
                          <option value="SUIT"className='pt-2'>SUIT</option>
                          <option value="GOWN"className='pt-2'>GOWN </option>
                          <option value="ADIRE"className='pt-2'>ADIRE</option>
                       </select>
                      </label>
                    </div>
                   

                   <div className='border-2 mt-4'>
                    <h4>SIZE</h4>
                    <ul className='flex justify-between py-2'>
                      <li className='w-8 h-8 bg-secondary-500 text-center'>S</li>
                      <li className='w-8 h-8 bg-secondary-500 text-center'>M</li>
                      <li className='w-8 h-8 bg-secondary-500 text-center'>L</li>
                      <li className='w-8 h-8 bg-black text-white text-center'>XL</li>
                      <li className='w-8 h-8 bg-secondary-500 text-center'>XXL</li>
                    </ul>
                   </div>
                  
                  <div className='border-2 mt-10'>
                    <h4>COLOURS</h4>
                    <ul className='flex gap-3 py-2'>
                      <li className='w-8 h-8 rounded-full bg-orange-700 '></li>
                      <li className='w-8 h-8 rounded-full bg-blue-800 '></li>
                      <li className='w-8 h-8 rounded-full bg-yellow-300 '></li>
                      <li className='w-8 h-8 rounded-full bg-secondary-600 '></li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2 text-left">PRICE</label>
                      <div className='flex items-center justify-between'>
                        <p>₦{priceRange}</p>
                        <p>₦ 150,000</p>
                      </div>                           
                      <input type="range" min="50000" max="150000" value={priceRange} onChange={handlePriceChange} className="w-full border-red-400" />
                    </div>
                        
                  </div>
                </div>
               
                
          
              </div>
             )}
        </div>

        {/*  sortby dropdown */}
        <div className="relative">
          <button onClick={() => setSortOrder(!sortOrder)}  className='py-8 flex gap-1 font-semibold'>
           SORT BY: {sortOrder}  <BsChevronDown className='cursor-pointer text-base text-center mt-1 font-semibold' />
          </button>
          {sortOrder && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg cursor-pointer">
                <button onClick={() => handleSelection('NEWEST')}  className="block px-4 py-2 hover:border-b-4 hover: border-black">NEWEST</button>
                <button onClick={() => handleSelection('OLDEST')}  className="block px-4 py-2 hover:border-b-4 hover:border-black">OLDEST</button>
                <button onClick={() => handleSelection('A-Z')}  className="block px-4 py-2 hover:border-b-4 hover:border-black">A-Z</button>
                <button onClick={() => handleSelection('PRICE (LOW > HIGH)')}  className="block px-4 py-2 hover:border-b-4 hover:border-black">PRICE (LOW &gt; HIGH) </button>
                <button onClick={() => handleSelection('PRICE (LOW < HIGH)')}  className="block px-4 py-2 hover:border-b-4 hover:border-black">PRICE (LOW &lt; HIGH)</button>
              </div>
           )}
        </div>
       
        </div>

        <div className='py-6 grid grid-cols-4 gap-12'>

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

        <div className='flex gap-4 ml-96'>
        <button onClick={handlePrevious} disabled={currentPage === 1} className='flex gap-2 text-base'><BsArrowLeft className='text-2xl text-center'/> Previous </button>

        <div className='flex justify-between  gap-12'>
          <p className='hover:bg-black hover:rounded-lg hover:w-8 hover:h-8 hover:text-white hover:text-center'> 1</p>
          <p className='hover:bg-black hover:rounded-lg hover:w-8 hover:h-8 hover:text-white hover:text-center'>2</p>
          <p className='hover:bg-black hover:rounded-lg hover:w-8 hover:h-8 hover:text-white hover:text-center'>3</p>
          <p className='hover:bg-black hover:rounded-lg hover:w-8 hover:h-8 hover:text-white hover:text-center'>...</p>
          <p className='hover:bg-black hover:rounded-lg hover:w-8 hover:h-8 hover:text-white hover:text-center'>67</p>
          <p className='hover:bg-black hover:rounded-lg hover:w-8 hover:h-8 hover:text-white hover:text-center'>68</p>
        </div>
        <button onClick={handleNext}  className='flex gap-2 text-base'>Next <BsArrowRight className='text-2xl text-center' /></button>
      
        </div>
    </div>
   </div>
  )
}

export default Category