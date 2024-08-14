import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="container-md">
                <div className="row">
                    <div className="col-md-4">
                        <div className=' h4 brand text-white '>Unbrew.</div>
                    </div>
                    <div className="col-md-8 d-flex">
                        <div className="container row m-2  d-flex f-wrap">
                            <div className="col-sm"><li><Link to="/home">HOME</Link></li></div>
                            <div className="col-sm"><li><Link to="/about">ABOUT</Link></li>
                            </div>
                            <div className="col-sm"><li><Link to="/services">SERVICES</Link></li>
                            </div>
                            <div className="col-sm">
                                <li><Link to="/pricing">PRICING</Link></li>
                            </div>
                            <div className="col-sm">
                                <li><Link to="/work">WORK</Link></li>

                            </div>
                            <div className="col-sm">
                                <li><Link to="/blog">BLOG</Link></li>


                            </div>
                            <div className="col-md">
                                <li><Link to="/contact">CONTACT</Link></li>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* <div className='text-white h4  '>Unbrew.</div> */}
            {/* <div className='container-xl'>
                <ul className=''>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li><Link to="/pricing">pricing</Link></li>
                    <li><Link to="/work">work</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/contact">contactus</Link></li>
                </ul>
            </div> */}
        </div>


    )
}

export default Navbar