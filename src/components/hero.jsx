import React,{ useState } from 'react';
import Typed from 'react-typed';
import bgImg from '../images/myimg2_edit.png';
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
const Hero = () => {
    const[hello,sethello] = useState(true)
    const handleNav = () =>{
        sethello(!hello)
    }
    return(
        <div  name='home' className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                
                <div className='flex flex-col justify-center md:items-start w-full px-8 py-5'>               
                 
                    <h1 className='text-[#FFDDDB] md:text-9xl sm:text-6xl text-4xl font-bold invisible md:visible sm:visible'>Hello.</h1>
                    <div className='text-white md:text-9xl sm:text-6xl font-bold flex justify-center'>
                        <p className='text-4xl invisible md:visible '>I am a </p>
                        <Typed className='text-[#FFDDDB] text-4xl md:pl-4 pl-2 invisible md:visible sm:visible' strings={['DESIGNER','DEVELOPER','ML ENTHUSIAST']} typeSpeed={120} backSpeed={140} loop />
                    </div>
                    <div className='flex gap-5 pt-10 invisible md:visible '>
                        <a href="https://www.linkedin.com/in/anjali-kedia-10896320a/" target="_blank">
                        <BsLinkedin size={40} color='white'/></a>
                        <a href="https://github.com/Anjali-Kedia" target="_blank">
                        <BsGithub size={40} color='white'/></a>
                        <a href="#" target="_blank">
                        <BsInstagram size={40} color='white'/></a>
                    </div>
                    
                </div>
                    <div>
                        <img className='w-full' src={bgImg} alt="/"/>
                    </div>


            </div>
            
        </div>
       

    )

}
export default Hero;