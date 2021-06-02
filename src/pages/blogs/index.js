import { useStaticQuery, graphql } from "gatsby"
import React from 'react';
import BlogCard from "../../components/blogCard";
import Layout from '../../components/layout';
import ProfileCard from "../../components/profileCard";

 const Blogs = () => {

    const title  = useStaticQuery(
        graphql`
        query {
            allMdx {
              edges {
                node {
                  frontmatter {
                    title,
                    description
                    path
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 200
                          quality: 95
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                  }
                }
              }
            }
          }
       `
         )
      const data = title.allMdx.edges[0].node.frontmatter
      console.log(data)
    return (
        <Layout>
          <div style={{ backgroundColor: '#262626'}} className='w-full rounded-md mb-8'>
            <ProfileCard />
            <div className='flex align-center px-8 md:px-20 lg:px-28 justify-center'>
              <div className='bg-white h-px w-full'>
              </div>
            </div>
             {title.allMdx.edges.map((e) =>  
             <BlogCard 
             data={e.node.frontmatter} 
             key={e.node.frontmatter.path}
             />)}
          </div>
        </Layout>
    )
}
export default Blogs