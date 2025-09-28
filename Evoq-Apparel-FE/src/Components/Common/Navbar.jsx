import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import evoqLogo from '../../assets/evoq-brown.PNG'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between px-4 sm:px-12 lg:px-20 z-20'>
      {/* Navigation Menu */}
      <div className='p-4'>
        <HiOutlineMenuAlt4 size={30} className='cursor-pointer' />
      </div>
      {/* Organization name */}
      <div onClick={()=> navigate('/')} className='flex items-center gap-2 cursor-pointer'>
        <img src={evoqLogo} alt="Evoq Logo" className='w-12' />
        <p className='text-xl font-semibold hidden sm:block'>Evoq Apparel</p>
      </div>
      {/* Cart and Profile */}
      <div className='flex items-center gap-4 '>
        <p>
            <FaShoppingBag size={25} className='cursor-pointer' />
        </p>
        <p>
            <RiUser3Fill size={25} className='cursor-pointer ' />
        </p>
      </div>
    </div>
  )
}

export default Navbar
