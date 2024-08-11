import React from 'react'
import Button from './Button'
import { ImCheckmark } from "react-icons/im";

const Card5 = (props) => {
    return (
        <div className='card5container2  pt-5'>
            <div className="card4imgCont2">
                <div className='h1 text-primary'> <span className='text-muted'>{props.doller}</span>{props.price}</div>
            </div>
            <div className='gap-5 card5icontext'>
                <div className='ms-5'>
                    <i className='text-primary'> <ImCheckmark /></i>
                    <span className='text-muted'>  Strategic Alliance</span>
                </div>
                <div className='ms-5'>
                    <i className='text-primary'> <ImCheckmark /></i>

                    <span className='text-muted'> rowth Expansion</span>
                </div> <div className='ms-5'>
                    <i className='text-primary'> <ImCheckmark /></i>

                    <span className='text-muted'> Business Planning</span>
                </div> <div className='ms-5'>
                    <i className='text-primary'> <ImCheckmark /></i>

                    <span className='text-muted'> Contact Negotiation</span>
                </div> <div className='ms-5'>
                    <i className='text-primary'> <ImCheckmark /></i>

                    <span className='text-muted'> Market Positioning</span>
                </div>
            </div>
            <Button span1="GET SATRTED"></Button>
        </div>
    )
}

export default Card5