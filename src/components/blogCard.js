import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'



const BlogCard = ({data}) => {
    const img = getImage(data.image)
    return (
        <Link to={data.path} className='flex flex-col md:flex-row px-8 md:px-32 pt-20 lg:px-38'>
               <div className='rounded p-4 md:p-9 bg-black w-full mb-2 md:mb-0 md:mr-2 md:w-7/12 text-white'>
                   <h1 className='text-white fancytext'>{data.title}</h1>
                   <p className='text-lg fancyText'>{data.description}</p>
               </div> 
               <GatsbyImage image={img} alt='ather'className='w-full md:w-5/12 rounded'/>
        </Link>
    )
}

export default BlogCard;