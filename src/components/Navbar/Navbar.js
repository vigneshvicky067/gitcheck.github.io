// eslint-disable-next-line
import React, { useState } from 'react';
import logo from'../../assets/images/logo.png';
import headerImage from '../../assets/images/heroImage.png'
import {FaBell,FaSearch} from 'react-icons/fa'
export default function Navbar(){
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='relative'>
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'>
        <img src={logo} height={800} alt='logo' width={200}/>
       
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open?<FaBell/>:<FaSearch/>}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
    </div>
  )
}