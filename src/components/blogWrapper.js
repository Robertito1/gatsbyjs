import React from 'react'

const BlogWrapper = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#262626'}} className='w-full rounded-md pb-8 pt-8 mb-8 pb-12 text-white text-xl px-8 md:px-20 lg:px-30'>
            {children}
        </div>
    )
}

export default BlogWrapper
