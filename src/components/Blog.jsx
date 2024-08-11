import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Blog = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <Content
                h1="Our Blog"
                p=" Home  BLOG"
            ></Content>
        </div>
    )
}

export default Blog