import React from 'react'
const Content = (props) => {
    return (
        <div>
            <div className='row row2 text-center text-white'>
                <div>
                    <h1 > {props.h1} </h1>
                    <p >{props.p}  </p>
                </div>
            </div>
        </div>
    )
}
export default Content