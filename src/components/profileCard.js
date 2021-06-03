import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const ProfileCard =() => {
    return (
        <div className='w-full flex px-8 py-10 md:px-20 md:py-10 lg:align-center lg:flex-row lg:justify-left lg:py-10 '>
               <StaticImage src="../images/robert_image.jpg" width={80} quality={95} alt="A dinosaur"
               className='p-0 rounded-full m-4 ml-0' />
               <div className='flex align-center flex-col justify-center'>
                 <p className='text-white text-xl font-semibold md:text-2xl lg:text-3xl'>ROBERT ORAZU</p>
                 <p className='text-white text-xl font-semibold md:text-2xl lg:text-2xl'>FullStack Software Developer</p>
               </div> 
        </div>
    )
}

export default ProfileCard
