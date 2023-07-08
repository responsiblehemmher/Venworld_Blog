import React from 'react'
import logo from'./../assets/Images/bloglogo.jpg'
function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} className='w-[185px]' />
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
      <button className='flex bg-red-500 rounded-full text-white'>Subscribe</button>
    </div>
  )
}

export default Header