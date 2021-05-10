import { Link } from 'gatsby'
import React from 'react'

 const Blogs = () => {
    return (
        <div>
            Blog Home page
            <Link to="/blogs/react-refs">React refs</Link>
            <Link to="/blogs/second">soc</Link>
        </div>
    )
}

export default Blogs