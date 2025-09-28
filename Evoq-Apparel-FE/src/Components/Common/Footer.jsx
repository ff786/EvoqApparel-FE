import React from 'react'
import evoqLogo from '../../assets/evoq-white.PNG'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-24 bg-primary text-white px-4 sm:px-12 lg:px-20 py-12 '>
        {/* Display Footer Contents */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 w-full'>
        {/* Logo and Description */}
        <div>
            <div className='flex items-center gap-2 mb-4'>
                <img src={evoqLogo} alt="Evoq Logo" className='w-16' />
                <p className='text-xl font-semibold'>Evoq Apparel</p>
            </div>
            <p className='text-justify'>We think we've created the best undershirt, and we want you to be blown away by it. If you're not, we'll give you your money back. No questions asked. Return shipping covered within continental Sri Lanka.</p>
        </div>
        {/* Information and Links */}
        <div>
            <h1 className='text-xl font-semibold'>INFORMATION</h1>
            <ul className='mt-4 flex flex-col gap-3'>
                <li className='hover:pl-4 transition-all duration-300 ease-in-out hover:border-l-2'>
                    <Link to="/">About Us</Link>
                </li>
                <li className='hover:pl-4 transition-all duration-300 ease-in-out hover:border-l-2'>
                    <Link to="/">Contact Us</Link>
                </li>
                <li className='hover:pl-4 transition-all duration-300 ease-in-out hover:border-l-2'>
                    <Link to="/">Customer Service</Link>
                </li>
                <li className='hover:pl-4 transition-all duration-300 ease-in-out hover:border-l-2'>
                    <Link to="/">Return Policy</Link>
                </li>
            </ul>
        </div>
        {/* Subscribe */}
        <div>
            <h1 className='text-xl font-semibold'>SUBSCRIBE</h1>
            <p className='mt-4'>Get the latest updates on new products and upcoming sales</p>
            <div className='mt-4 flex gap-2'>
                <input type="text" placeholder='Your email address' className='flex-1 px-4 py-2 rounded-md placeholder:text-white  outline-none border' />
                <button className=' px-6 py-2 rounded-md bg-white border-transparent text-primary hover:text-white hover:bg-primary  hover:border hover:border-white transition-all duration-300 ease-in-out'>Subscribe</button>
            </div>
        </div>
       
      </div>
      <div className='mt-12 border-t w-full text-center'>
            <p className='text-sm md:text-base mt-4'>©2025. Evoq Apparel. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
