import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'



const BlogCard = ({data}) => {
    console.log(data)
    return (
        <>
        <Img fluid={data.image.childImageSharp.fluid}  alt="A dinosaur"/>
        <Link to="/blogs/react-refs" className='flex mx-20 mt-20 lg:h-60 md:mx-32 lg:mx-38'>
               <div className='p-9 bg-black w-7/12 text-white'>
                   <p className='text-white'>{data.title}</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt neque nec nisi viverra,
                      nec cursus arcu efficitur. Proin purus tortor, ornare eget erat id
                   </p>
               </div> 
        </Link>
        </>
    )
}

export default BlogCard;