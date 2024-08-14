import React from 'react'
const Card = (props) => {
    return (

        <div class="card mt-3 ccard cbg-white text-center" style={{ width: "400px", height: "250px" }}>
            <div className='row mx-auto'>
                <img class="card-img-top mt-3 card-img-center rounded-circle" src={props.logo} alt="Card image" style={{
                    width: "70px", height: "70px"
                }}></img>
            </div>
            <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <p class="card-text"> {props.p} </p>
            </div>
        </div>
        // <div className='cardcontainer card'>
        //     <div className="imgContcard3">
        //         <img className='card-img' src={props.logo} alt="logo" />
        //     </div>
        //     <h5 className='card-text  text-dark'>  {props.title}</h5>
        //     <p className='desc text-muted'>
        //         {props.p}
        //     </p>
        // </div>
    )
}

export default Card