import React from 'react'
import {AiFillGithub} from 'react-icons/ai';
import {BsArrowUpRight} from 'react-icons/bs';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,  
  Button,
} from "@material-tailwind/react";

import restaurant from '../images/restaurant.png';
import expense from '../images/expense.png';
import jobfind from '../images/job-find.png'
import blogapp from '../images/myblogapp.png'


//For all the jobs, we are going to use high order array method called Map
//Create a list of all jobs into an array called Data

const Data = [
  {
    id:1,
    image:blogapp,
    title:'Blog Website',
    desc: 'Tech Stack: NextJS, graphql',
    github: 'https://github.com/Anjali-Kedia/MyBlogApp',
    site:'https://byte-app.vercel.app'
  },
  {
    id:2,
    image:restaurant,
    title:'Restaurant Site',
    desc: 'Tech Stack: React JS, CSS',
    github:'https://github.com/Anjali-Kedia/RestaurantSite',
    site:'https://restaurant-site-smoky.vercel.app',
  },
  {
    id:3,
    image:expense,
    title:'Expense Tracker',
    desc: 'Tech Stack: MongoDB, ExpressJS, ReactJS, NodeJS',
    github: 'https://github.com/Anjali-Kedia/Expense_Tracker',
    site: 'https://github.com/Anjali-Kedia/Expense_Tracker'
  },
  {
    id:4,
    image:jobfind,
    title:'Job Search Site',
    desc: 'Tech Stack: Vite ReactJS, TailwindCSS ',
    github: 'https://github.com/Anjali-Kedia/JobFinder',
    site:'https://job-finder-livid.vercel.app'
  },
  // {
  //   id:4,
  //   image:'../images/driverdrowsiness.png',
  //   title:'Software Eng',
  //   time: '10hrs',
  //   location:'Australia',
  //   desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
  //   company: 'Web Tech Agency'
  // },



]



const Job = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center 
      py-10 '>
        {
          Data.map(({image,id, title, desc,github, site }) => {
            return (
              //This will a single job post based on the ID
              <Card className="w-96 p-4 bg-black border-[#FFDDDB] border-2 shadow-lg hover:shadow-[#FFDDDB]">
              <CardHeader floated={false} className=" mb-2 ">
                <img className='hover:scale-110 hover:-translate-y-1' src={image} alt='' />
              </CardHeader>
              <CardBody className="text-center ">
                <Typography variant="h4" color="blue-gray" className="mb-2 text-[#FFDDDB]">
                  {title}
                </Typography>
                <Typography  className="font-small text-[#FFDDDB]" >
                  {desc}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-16 pt-2">
            <a href={site} target='_blank' rel="noreferrer" >
            <Button size="sm"  className="flex items-center gap-1 text-[18px] text-[#FFDDDB]">
                Visit
            <BsArrowUpRight strokeWidth={2} className="w-4 h-4 href={site}" />
             </Button>
             </a>
              
                
                <a href={github} target='_blank' rel="noreferrer" className="inline-block cursor-pointer">
                    <AiFillGithub className='text-[33px] text-[#FFDDDB] '/>
                 </a> 
               
              </CardFooter>
            </Card>
            )
          }
          
          )
        }

      </div>
    </div>
  )
}

export default Job
