import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import myLogoBlack from '../images/LogoBlack.png';
import myLogoWhite from '../images/white_banner.png';
import {Link} from 'react-scroll'

const NavBar = () => {
    const[nav,setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
    return ( 
        <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <img src={myLogoWhite} className="h-14 mr-2 ml-3 mt-4 sm:h-20" alt="HUSTLE|BELIEVE"/>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#FFDDDB]'>
                <Link  to="home"  smooth={true} duration={500} >
          Home
        </Link></li>
                <li className='p-4 hover:text-[#FFDDDB]'><Link  to="about"  smooth={true} duration={500} >
          About
        </Link></li>
                <li className='p-4 hover:text-[#FFDDDB]'><Link  to="skills"  smooth={true} duration={500} >
          Skills
        </Link></li>
                <li className='p-4 hover:text-[#FFDDDB]'><Link  to="work"  smooth={true} duration={500} >
          Work
        </Link></li>
                <li className='p-4 hover:text-[#FFDDDB]'><Link  to="contact"  smooth={true} duration={500} >
          Contact
        </Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#FFDDDB] text-black ease-in-out duration-500 flex flex-col justify-center items-center' : 'fixed left-[-100%]' }>
            <img src={myLogoBlack} className="h-14 mr-2 ml-7 sm:h-20" alt="HUSTLE|BELIEVE"/>
                <ul className='pt-24 uppercase p-4' >
                <li className='p-3 mb-5'><Link onClick={handleNav} to="home"  smooth={true} duration={500} >
          Home
        </Link></li>
                <li className='p-3 mb-5'><Link onClick={handleNav} to="about"  smooth={true} duration={500} >
          About
        </Link></li>
                <li className='p-3 mb-5'><Link onClick={handleNav} to="skills"  smooth={true} duration={500} >
          Skills
        </Link></li>
                <li className='p-3 mb-5'><Link onClick={handleNav} to="work"  smooth={true} duration={500} >
          Work
        </Link></li>
                <li className='p-3'><Link onClick={handleNav} to="contact"  smooth={true} duration={500} >
          Contact
        </Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavBar;