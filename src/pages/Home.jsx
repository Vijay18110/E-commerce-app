import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const Home = () => {
    return (
        <div className='container-fluid  main pt-5'>
            <Navbar></Navbar>
            <div className='row homerow'>
                <div className='col-6  '>
                    <h1 className=' homeh1 text-white text-center'>Boost Personal <br /> Productivity</h1>
                    <p className=' p text-white text-center'>A small river named Duden flows by their place and supplies it <br />with the necessary regelialia</p>

                    <div className='d-flex'>  <Button span1="Start A Project"></Button>
                        <Button span1="Call us for any inquiry" span2="+01 2345 5678 910" ></Button></div>

                    <div className='d-flex gap-4 m-5 text-white '>
                        <FaInstagram></FaInstagram>
                        <CiFacebook></CiFacebook>
                        <FaTwitterSquare></FaTwitterSquare>
                        <IoLogoGoogleplus></IoLogoGoogleplus>
                    </div>
                </div>
                <div className='col-6'><img src="bg_1.svg" alt="" /></div>
            </div>

        </div>
    )
}

export default Home