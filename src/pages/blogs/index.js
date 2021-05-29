import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
                    image {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
         )
        //  console.log(title.allMdx.edges[0].node.frontmatter.image.childImageSharp.fluid)
      //   let img = title.allMdx.edges[0].node.frontmatter.image.childImageSharp.fluid
      // const url = title.allMdx.edges[0].node.frontmatter.title
      // const url2 = title.allMdx.edges[1].node.frontmatter.title
    return (
        <Layout>
          <div style={{ backgroundColor: '#262626'}} className='w-full rounded-md mb-8'>
            <ProfileCard />
            <div className='flex align-center justify-center bg-black h-0.5 w-full'></div>
             <BlogCard />
            <Link to="/blogs/react-refs">ff</Link>
            <Link to="/blogs/second">ffd</Link>
          </div>
        </Layout>
    )
}
 /* <Img fluid={img}  alt="A dinosaur"/> */
export default Blogs