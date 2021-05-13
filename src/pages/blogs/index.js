import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';

 const Blogs = () => {
    return (
        <Layout>
            <Link to="/blogs/react-refs">React refs</Link>
            <Link to="/blogs/second">soc</Link>
        </Layout>
    )
}

export default Blogs