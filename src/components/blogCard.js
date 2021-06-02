import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'



const BlogCard = ({data}) => {
    const img = getImage(data.image)
    return (
        <Link to={data.path} className='flex mx-20 mt-20 lg:h-60 md:mx-32 lg:mx-38'>
               <div className='p-9 bg-black w-7/12 text-white'>
                   <p className='text-white'>{data.title}</p>
                   <p>{data.description}
                   </p>
               </div> 
               <GatsbyImage image={img} alt='ather'className='w-5/12'/>
        </Link>
    )
}

export default BlogCard;