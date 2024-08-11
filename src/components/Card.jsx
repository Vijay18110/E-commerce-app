import React from 'react'
const Card = (props) => {
    return (
        <div className='cardcontainer'>
            <div className="imgContcard3">
                <img className='' src={props.logo} alt="logo" />
            </div>
            <h5 className='title text-dark'>  {props.title}</h5>
            <p className='desc text-muted'>
                {props.p}
            </p>
        </div>
    )
}

export default Card