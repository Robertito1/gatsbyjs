import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import React from 'react';
import Layout from '../../components/layout';

 const Blogs = () => {

    const title  = useStaticQuery(
        graphql`
        query {
            allMdx {
              edges {
                node {
                  frontmatter {
                    title,
                  }
                }
              }
            }
          }
        `
         )
      const url = title.allMdx.edges[0].node.frontmatter.title
      const url2 = title.allMdx.edges[1].node.frontmatter.title
    return (
        <Layout>
            <div className='w-full flex  mt-12 lg:mt-0 px-8 py-10 md:px-20 md:py-10 md:w-3/4 lg:align-center lg:flex-row lg:justify-around lg:px-30 lg:py-10 lg:w-1/2'>
               <StaticImage src="../../images/robert_image.jpg" width={80} quality={95} alt="A dinosaur"
               className='p-0 rounded-full' />
               <div className='flex align-center flex-col justify-center'>
                 <p className='text-3xl font-semibold'>ROBERT ORAZU</p>
                 <p className='text-2xl font-semibold'>FullStack Software Developer</p>
               </div>
               <div className='flex align-center justify-center bg-black h-0.5 w-60'></div> 
           </div>
            <Link to="/blogs/react-refs">{url2}</Link>
            <Link to="/blogs/second">{url}</Link>
        </Layout>
    )
}

export default Blogs