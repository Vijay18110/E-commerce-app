import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
const Cardx = (props) => {
    return (
        <>







            <div class="card mt-3 mt-3 gap-3 c1card  text-center" style={{ width: "400px", border: "none" }}>

                <div className='row '>
                    <div>
                        <img class="card-img-top  card-img-center" src={props.logo} alt="Card image" style={{
                            width: "100%", height: "300px"
                        }}>
                        </img>
                    </div>
                </div>

                <div class="card-body">
                    <h4 class="card-title text-secondary">{props.title}</h4>
                    <p class="card-text text-muted"> {props.p} </p>
                </div>
            </div>

        </>
    )
}

export default Cardx