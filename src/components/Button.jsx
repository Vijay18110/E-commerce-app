import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
const Button = (props) => {
    return (
        <p className="d-flex">
            <div type="button" className='a1 p-2'>
                <Link to="#" className=" btn text-center text-white  align-items-center"><span>{props.span}</span></Link>
            </div>
        </p>
    )
}

export default Button
