import React from 'react'
import './index.css'
import Navbar from '../../components/Navbar'
import Content from '../../components/Content'
const About = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <Content
                h1="ABOUT Us"
                p=" Home  About us"
            ></Content>
        </div>
    )

}

export default About