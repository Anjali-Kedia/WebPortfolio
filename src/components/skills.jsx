import React from 'react';
import cpp from '../images/c-logo.png';
import python from '../images/python-logo.png';
import js from '../images/javascript-logo.png';
import react from '../images/react-logo.png';
import mySql from '../images/mysql-logo.png';
import figma from '../images/figma-logo.png';
import html from '../images/html5-logo.png';
import github from '../images/github-mark-white.png';

const Skills = () => {
    return ( 
        <div name='skills' className=' w-full   pt-20 text-white'>
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFDDDB] text-white'>SKILLS </p>
                <p className='py-4 font-bold'>These are some technologies I've worked with:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={cpp} alt="C++ Icon"/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                <img className='w-20 mx-auto' src={python} alt="C++ Icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt="C++ Icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="C++ Icon"/>
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={mySql} alt="C++ Icon"/>
                    <p className='my-8'>MySQL</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={figma} alt="C++ Icon"/>
                    <p className='my-2'>Figma</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="C++ Icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-150 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="C++ Icon"/>
                    <p className='my-10'>Github</p>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Skills;