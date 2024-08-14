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
            <div className='container' style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="col-md-5 justify-content-between">
                        <div className='h1 text-white hometext1'> Boost Personal Productivity</div>
                        <div className='h5  hometext2'>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </div>
                        <div className='row'>
                            <div className="col-5 p-0 fs-1">
                                <Button span="Start A project"></Button>
                            </div>
                            <div className="col-6">
                                <Button span="call us for any enquiry +91 919191919191"></Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img className='thumbnail' src="bg_1.svg" alt="" />
                    </div>

                </div>
            </div>



        </div >
    )
}

export default Home