import React from 'react'
import Card5 from '../components/Card5'

const Pricing1 = () => {
    return (
        <div className='container-fluid  pricingrow1 '>
            <div className='container middlerow4 pt-5'>
                <div className=' text-primary'> Pricing</div>
                <div className="h1 text-dark">Choose Your Pricing Plan</div>
                <div className='text-muted'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove.
                </div>
            </div>

            <div className="container d-flex pt-5">
                <Card5 price=" 49" doller="$"></Card5>
                <Card5 price=" 79" doller="$"></Card5>
                <Card5 price=" 109" doller="$" ></Card5>
                <Card5 price=" 149" doller="$"></Card5>
            </div>
        </div>
    )
}

export default Pricing1