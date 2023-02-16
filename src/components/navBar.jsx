import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import myLogoBlack from '../images/LogoBlack.png';
import myLogoWhite from '../images/white_banner.png';
const NavBar = () => {
    const[nav,setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
    return ( 
        <div className= ' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <img src={myLogoWhite} className="h-14 mr-2 ml-3 mt-4 sm:h-20" alt="HUSTLE|BELIEVE"/>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Skills</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFDDDB] text-black ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <img src={myLogoBlack} className="h-14 mr-2 ml-7 mt-4 sm:h-20" alt="HUSTLE|BELIEVE"/>
                <ul className='pt-24 uppercase p-4' >
                <li className='p-3 mb-5'>Home</li>
                <li className='p-3 mb-5'>About</li>
                <li className='p-3 mb-5'>Projects</li>
                <li className='p-3 mb-5'>Skills</li>
                <li className='p-3'>Contact</li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavBar;