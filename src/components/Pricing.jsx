import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Pricing = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <Content
                h1="Price & plans"
                p=" Home  PRICING"
            ></Content>
        </div>
    )
}

export default Pricing