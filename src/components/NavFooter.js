import React from 'react'
import { Link } from 'react-router-dom'
import { RiHome3Line } from "react-icons/ri";
import { FaDumbbell } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
const NavFooter = () => {
  return (
    <div className=' bg-black sticky bottom-0  p-5 z-20 h-full w-screen rounded-t-3xl lg:hidden xl:hidden'>
      <ul className='flex flex-row justify-around'>
        <li className='text-white text-5xl' ><Link><FaDumbbell/></Link></li>
        <li className='text-white text-5xl'><Link><RiHome3Line/></Link></li>
        <li className='text-white text-5xl'><Link><FaHeadphonesAlt/></Link></li>
      </ul>
    </div>
  )
}

export default NavFooter