import React from 'react'

const Card4 = (props) => {
    return (

        <div className='card4container2 gap-3'>
            <div className="card4imgCont2">
                <img src={props.pic} alt="pic" />
            </div>
            <div className='d-flex card4text'>
                <h5 className='title text-dark '> {props.work}</h5>
                <p className='desc text-muted'>
                    {props.p}
                </p>
            </div>
        </div>
    )
}

export default Card4