import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Work = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <Content
                h1="Explore Our Works"
                p=" Home  WORKS"
            ></Content>
        </div>
    )
}

export default Work