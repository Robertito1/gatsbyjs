import { useStaticQuery, graphql, Link } from "gatsby"
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
      const data = title.allMdx.edges[0].node.frontmatter
    return (
        <Layout>
          <div style={{ backgroundColor: '#262626'}} className='w-full rounded-md mb-8'>
            <ProfileCard />
            <div className='flex align-center px-8 md:px-20 lg:px-28 justify-center'>
              <div className='bg-white h-px w-full'>
              </div>
            </div>
             <BlogCard data={data} />
            <Link to="/blogs/react-refs">ff</Link>
            <Link to="/blogs/second">ffd</Link>
          </div>
        </Layout>
    )
}
export default Blogs