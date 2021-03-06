import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
    return ( 
        <div  style={{ backgroundColor: '#262626'}} className='rounded-b-md text-white mb-8 px-8 py-20 md:px-20 lg:px-30 '>
            <p className='text-3xl mb-4'>Some of my works</p>
            <div className='w-full mb-40 flex flex-col justify-around items-center align-center lg:flex-row justify-between '>
                <div className='my-auto px-4'>
                <StaticImage src="../images/dorcas.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
                </div>
                <div className='px-4 w-full lg:w-1/4'>
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
               <p className='text-xl'>A portfolio Site for a Human Resource Consultant</p>
                </div>
           </div>
           <div className='w-full  mb-6 flex flex-col justify-around items-center align-center lg:flex-row justify-between '>
                <div className='my-auto px-4 order-1 lg:order-2'>
                <StaticImage src="../images/beauty.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
                </div>
                <div className='px-4 order-2 w-full lg:w-1/4 lg:order-1'>
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
               <p className='text-xl'>The landing page of a beauty and cosmetics E-commerce shop</p>
                </div>
           </div>
        </div>
     );
}
 
export default Projects;