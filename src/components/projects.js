import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
    return ( 
        <div  style={{ backgroundColor: '#262626'}} className='rounded-b-md text-white mb-8 px-8 py-20 md:px-20 lg:px-30 '>
            <p>Some of my works</p>
            <div className='w-full flex flex-col justify-around align-center lg:flex-row justify-between '>
                <div>
                <StaticImage src="../images/dorcas.png" width={500} quality={95} alt="A dinosaur" className='p-0' /> 
                </div>
                <div>Write up</div>
           </div>
        </div>
     );
}
 
export default Projects;