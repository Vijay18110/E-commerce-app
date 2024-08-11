import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>

            <div className='row row1'>
                <div className='col-2 text-end hover-text-dark text-white h4 unbrev '>Unbrew.</div>
                <div className='col-10  nav '>
                    <ul className=''>
                        <li><Link to="/home">home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/services">services</Link></li>
                        <li><Link to="/pricing">pricing</Link></li>
                        <li><Link to="/work">work</Link></li>
                        <li><Link to="/blog">blog</Link></li>
                        <li><Link to="/contact">contactus</Link></li>

                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Navbar