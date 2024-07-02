import React from "react";
import Job from "../assets/card"
import JobAI from "../assets/cardAIML"
import JobOpenS from "../assets/cardOpenSource";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div  className='w-full  md:h-screen lg:mt-96 md:mt-96 text-white pt-28' >
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-9'>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-[#FFDDDB]'>PROJECTS</p>
                    <p className='py-6'>Check out some of my recent projects.</p>
        </div>
      <div className="flex flex-wrap place-content-center">
        <div className=" ">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-white "
            role="tablist"
          >
            <li className="-mb-px mr-2  last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-s font-bold  px-5 py-5 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black " + color + "-600 bg-[#FFDDDB] "
                    : "text-white" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Front-End Projects
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-s font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-" + color + "-600 bg-[#FFDDDB]"
                    : "text-white" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 AI/ML Projects
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-s font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-" + color + "-600 bg-[#FFDDDB]"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Open-Source Projects
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Job/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <JobAI/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <JobOpenS/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default function TabsRender() {
  return (
    <>
    <div id="project">
      <Tabs color="pink" />;
    </div>
    </>
  );
}