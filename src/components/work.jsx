import React, { useRef } from 'react';
import { works } from '../data/constants.js';

const Works = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} id="work" className="relative bg-black text-red-500 py-12 mt-20">
      <div className="text-center mt-20 text-4xl font-bold text-primary sm:mt-3 sm:text-[32px] text-white">
        WORK EXPERIENCE
        <div className="mx-auto mt-2 h-1 w-72 border-b-4 border-[#FFDDDB]"></div>
      </div>
      <div className="relative mx-auto mt-10 w-11/12 md:w-8/12 lg:w-6/12">
        <div className="absolute transform -translate-x-1/2 top-0 bottom-0 w-px bg-[#FFDDDB] z-0"></div> {/* Vertical line */}
        {works.map((work, index) => (
          <div key={index} className="relative mb-8 flex items-start">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-[#fb908b] rounded-full"></div>
              <div className="absolute w-8 h-8 bg-[#333] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#fb908b] rounded-full"></div>
              </div>
            </div>
            <div className="ml-12 relative z-10 flex-1">
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex items-start">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-white">{work.title}</h3>
                  <p className="text-base text-gray-400 mb-2">{work.company}</p>
                  <div className="text-[#fb908b] text-lg mb-2">{work.date}</div>
                  <ul className="list-disc list-inside text-white space-y-2">
                    {work.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p className="text-base mt-4 text-white">
                    <span className="font-semibold">Tech Stack: </span>{Array.isArray(work.skills) ? work.skills.join(' • ') : 'N/A'}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 -mt-6">
                  <img src={work.logo} alt={`${work.company} logo`} className="w-32 h-32 object-contain" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
