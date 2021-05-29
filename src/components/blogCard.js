import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


const BlogCard = () => {
    return (
        <div className='flex'>
               <div className='w-75 text-white'>
                   <p>TITLE</p>
                   <p>Lorem ipsum muru anya make ndi ntiwa azu no ni ime ulo gi</p>
               </div>
               <StaticImage src="../images/react.png" width={80} quality={95} alt="A dinosaur"
               className='p-0 m-0 w-1/4' />
        </div>
    )
}

export default BlogCard;