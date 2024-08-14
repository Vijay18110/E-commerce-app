import React from 'react'
const Card4 = (props) => {
    return (

        <div className='card card4container2 gap-3'>
            <div className="row card4imgCont2">
                <img className='card-img-top' src={props.pic} style={{ width: "100px", height: "100px" }} alt="pic" />
            </div>
            <div className='d-flex card-body card4text'>
                <h5 className='title text-dark card-title'>{props.work}</h5>
                <p className='desc card-text text-muted'>
                    {props.p}
                </p>
            </div>
        </div>
    )
}

export default Card4