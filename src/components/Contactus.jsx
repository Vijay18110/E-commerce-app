import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Contactus = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <Content
                h1="Contact us"
                p=" Home  CONTACT"
            ></Content>
        </div>
    )
}

export default Contactus