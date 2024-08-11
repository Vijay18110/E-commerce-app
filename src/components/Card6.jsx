import React from 'react'

const Card6 = (props) => {
    return (
        <div className='card6container2 gap-2'>
            <div className="imgCont2">
                <img src={props.pic} alt="pic" />
            </div>
            <div className='card6text'>
                <p className='desc text-primary'>
                    {props.work}
                </p>
                <h5 className='title text-dark'>{props.name}</h5>
                <h4 className='title text-primary'>{props.x}</h4>


            </div>


        </div>
    )
}

export default Card6