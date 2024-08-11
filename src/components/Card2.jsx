import React from 'react'

function Card2(props) {
    return (
        <div className='cardcontainer2 gap-2'>
            <div className="imgCont2">
                <img src={props.pic} alt="pic" />
            </div>
            <div className=''>
                <p className='desc text-muted'>
                    {props.work}
                </p>
                <h5 className='title text-dark'>{props.name}</h5>

            </div>


        </div>
    )
}

export default Card2