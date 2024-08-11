import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
const Middle4 = () => {
    return (
        <div className="container-fluid-md bg-primary  middle4row1">
            <div className="row">
                <div className="col-md-6 ps-5 pt-5">
                    <div className="h1 text-white">Newsletter - Stay tune and get the latest update</div>
                    <div className="h4 text-light">Far far away, behind the word mountains</div>
                </div>
                <div className="col-md-6 middle4row1col6 ">
                    <input className='bg-primary text-white' type="text" placeholder="Enter Email address" />
                    <i><BsFillSendFill></BsFillSendFill></i>
                </div>

            </div>
        </div>
    )
}

export default Middle4