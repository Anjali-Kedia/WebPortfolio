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
                    <p >I am a final year student. Currently living in Chennai, I am joyous, fun loving person. 
                        I am a UI/UX designer and Web Developer.
                        I am specialising in AI and ML, and I have worked on projects building ML models.
                        Overall,I am always up to learn new technology and 
                        meet new people.
                    </p>
                    <button className='text-white border-2 px-6 py-3 my-2  items-center hover:border-[#FFDDDB] hover:bg-[#FFDDDB] hover:text-black'>Get In Touch</button>
                </div>
            </div>
            </div>
            </div>
  
      );
}
 
export default About;