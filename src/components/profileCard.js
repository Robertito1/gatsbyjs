import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const ProfileCard =() => {
    return (
        <div className='w-full flex px-8 py-10 md:px-20 md:py-10 md:w-3/4 lg:align-center lg:flex-row lg:justify-around lg:px-30 lg:py-10 lg:w-1/2'>
               <StaticImage src="../../images/robert_image.jpg" width={80} quality={95} alt="A dinosaur"
               className='p-0 rounded-full' />
               <div className='flex align-center flex-col justify-center'>
                 <p className='text-3xl font-semibold'>ROBERT ORAZU</p>
                 <p className='text-2xl font-semibold'>FullStack Software Developer</p>
               </div> 
        </div>
    )
}

export default ProfileCard
