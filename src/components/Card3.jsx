import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const Card3 = (props) => {
    return (
        <div className='card3container'>
            <span className='d-flex icon text-center bg-primary'>
                <i className='text-center'>
                    <FaQuoteLeft></FaQuoteLeft>
                </i>
            </span>
            <p className='desc text-muted'>
                {props.p}
            </p>
            <div className="imgContcard3 d-flex gap-4">
                <img src={props.pic} alt="pic" />
                <div className='d-flex card3'>
                    <h3> {props.name}</h3>
                    <h5 className=' text-primary'>{props.work}</h5>

                </div>

            </div>
        </div>
    )
}

export default Card3