import React from 'react'
const Button = (props) => {
    return (
        <p class="d-flex gap-2 p-2">
            <div className='a1'>
                <a href="#" className=" btn text-center text-white  align-items-center"><span>{props.span1}</span> <br /><span> {props.span2}</span></a>
            </div>
        </p>
    )
}

export default Button
