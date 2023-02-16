import React from 'react';
import driverd from '../images/driverdrowsiness.png';
import nearbywaste from '../images/nearbywaste.png';
import design from '../images/design.png';



const Projects = () => {
    return ( 
        <div name='work' className='w-full md:h-screen  text-white' >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-9'>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-[#FFDDDB]'>WORK</p>
                    <p className='py-6'>Check out some of my recent projects</p>
                </div>

                {/*container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/*gridItem*/}
                    <div style={{backgroundImage: `url(${driverd})`}}
                    className='shadow-sm shadow-[#FFDDDB] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl ml-2 font-medium text-black tracking-wider'>
                                Drowsiness Alert System
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='https://github.com/PritikaKannapiran/Drowsiness-alert'>
                                        <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#FFDDDB] text-black font-bold text-lg'>
                                        VIEW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${nearbywaste})`}}
                    className='shadow-sm shadow-[#FFDDDB] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl ml-2 font-medium text-black tracking-wider'>
                                Nearby Waste Collectors
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='https://github.com/Anjali-Kedia/Nearby-Waste-Collectors'>
                                        <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#FFDDDB] text-black font-bold text-lg'>
                                        VIEW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div style={{backgroundImage: `url(${design})`}}
                    className='shadow-sm shadow-[#FFDDDB] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl ml-2 font-medium text-black tracking-wider'>
                                UI/UX Designs
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#FFDDDB] text-black font-bold text-lg'>
                                        VIEW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${nearbywaste})`}}
                    className='shadow-sm shadow-[#FFDDDB] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl ml-2 font-medium text-black tracking-wider'>
                                Nearby Waste Collectors
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#FFDDDB] text-black font-bold text-lg'>
                                        VIEW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${design})`}}
                    className='shadow-sm shadow-[#FFDDDB] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl ml-2 font-medium text-black tracking-wider'>
                                UI/UX Designs
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#FFDDDB] text-black font-bold text-lg'>
                                        VIEW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${nearbywaste})`}}
                    className='shadow-sm shadow-[#FFDDDB] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl ml-2 font-medium text-black tracking-wider'>
                                Nearby Waste Collectors
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#FFDDDB] text-black font-bold text-lg'>
                                        VIEW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    
     );
}
 
export default Projects;
