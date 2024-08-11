import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

const Services = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <Content
                h1="SERVICES"
                p=" HOME  SERVICES"
            ></Content>
        </div>
    )
}

export default Services