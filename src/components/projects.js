import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
    return ( 
        <div id='projects' style={{ backgroundColor: '#262626'}} className='rounded-b-md text-white mb-8 px-8 py-20 md:px-20 lg:px-30 '>
            <p className='text-5xl font-bold mb-4 sectiontext'>Some of my works</p>
            <div className='w-full mb-40 flex flex-col justify-between items-center align-center lg:flex-row justify-between '>
                <div className='my-auto lg:pr-4'>
                <StaticImage src="../images/dorcas.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
                </div>
                <div className='w-full pl-0 lg:w-1/4 lg:pl-4'>
               <p className='text-xl'> Type:</p>
               <p className='text-xl mb-4'>A portfolio Site</p>
               <p className='text-xl'>Tech Stack:</p>
               <ol className='mb-4'>
                 <li className='text-xl'>-HTML</li>
                 <li className='text-xl'>-CSS</li>
                 <li className='text-xl'>-JavaScript</li>
                 <li className='text-xl'>-BootStrap</li>
               </ol>
               <p className='text-xl'> Description:</p>
               <p className='text-xl mb-4'>A portfolio Site for a Human Resource Consultant</p>
               <a href='https://robertito1.github.io/project23/' role='button' className='viewProjectBtn text-black font-bold'>VIEW PROJECT</a>
                </div>
           </div>
           <div className='w-full  mb-6 flex flex-col justify-around items-center align-center lg:flex-row justify-between '>
                <div className='my-auto order-1 lg:order-2 lg:pl-4'>
                <StaticImage src="../images/beauty.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
                </div>
                <div className='order-2 w-full lg:w-1/4 lg:order-1 pr-4'>
               <p className='text-xl'> Type:</p>
               <p className='text-xl mb-4'>A Landing Page</p>
               <p className='text-xl'>Tech Stack:</p>
               <ol className='mb-4'>
                 <li className='text-xl'>-HTML</li>
                 <li className='text-xl'>-CSS</li>
                 <li className='text-xl'>-JavaScript</li>
                 <li className='text-xl'>-BootStrap</li>
               </ol>
               <p className='text-xl'> Description:</p>
               <p className='text-xl mb-4'>The landing page of a beauty and cosmetics E-commerce shop</p>
               <a href='https://robertito1.github.io/beauty/' role='button' className='viewProjectBtn text-black font-bold'>VIEW PROJECT</a>
                </div>
           </div>
        </div>
     );
}
 
export default Projects;