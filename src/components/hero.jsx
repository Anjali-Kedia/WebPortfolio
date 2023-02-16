import React from 'react';
import Typed from 'react-typed';
import bgImg from '../images/myimg2_edit.png';
const Hero = () => {
    return(
        <div className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-8 py-5'>               
                 
                    <h1 className='text-[#FFDDDB] md:text-9xl sm:text-6xl text-4xl font-bold'>Hello.</h1>
                    <div className='text-white md:text-9xl sm:text-6xl font-bold flex justify-center'>
                        <p className='text-4xl'>I am a </p>
                        <Typed className='text-[#FFDDDB] text-4xl md:pl-4 pl-2'strings={['DESIGNER','DEVELOPER','ML ENTHUSIAST']} typeSpeed={120} backSpeed={140} loop />
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