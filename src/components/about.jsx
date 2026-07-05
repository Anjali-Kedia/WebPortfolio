import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full  md:mt-44 md:mb-44  mt-20 mb-20'>
            <div className='flex flex-col justify-center h-full items-center text-white'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4 '>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFDDDB]'>ABOUT</p>
               </div>
            <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
                <p className='sm:text-right text-4xl font-bold'>Hi, I am Anjali, nice to meet you. Please take a look around.</p>   
                <div>
                    <p >Hi, I'm Anjali! I enjoy building software that people actually use. 
                        From AI-powered document intelligence platforms to full-stack web applications, I like working across the stack and turning ideas into polished products.
                        I'm naturally curious, love learning new technologies, and enjoy solving challenging engineering problems. 
                        Whether it's experimenting with AI, designing a clean user experience, or debugging a tricky production issue, I'm happiest when I'm building.

                    </p>
                    <button className='text-white border-2 px-6 py-3 my-2  items-center hover:border-[#FFDDDB] hover:bg-[#FFDDDB] hover:text-black'>Get In Touch</button>
                </div>
            </div>
            </div>
            </div>
  
      );
}
 
export default About;