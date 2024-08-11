import React from 'react'
import prof1 from '../assets/professionalpic1.jpg'
import prof2 from '../assets/professionalpic2.jpg'
import prof3 from '../assets/professionalpic3.jpg'
import prof4 from '../assets/professionalpic4.jpg'
import Card6 from '../components/Card6'

const Ourblog = () => {
    return (
        <div className='container-fluid-md  portfoliorow1 '>
            <div className='container-md middlerow4 pt-5'>
                <div className=' text-primary'> Our Blog</div>
                <div className="h1 text-dark">Recent Blog
                </div>
                <div className='text-muted'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove.
                </div>
            </div>
            <div className='conatiner-fluid-md d-flex pt-5 gap-3 '>
                <Card6 x="Stevenson" pic={prof1} work="Explore The Best Restaurant in New York" name="Dec. 05, 2020by Johan"></Card6>
                <Card6 x="Stevenson" pic={prof2} work="Explore The Best Restaurant in New York" name="Dec. 05, 2020by Johan"></Card6>
                <Card6 x="Stevenson" pic={prof3} work="Explore The Best Restaurant in New York" name="Dec. 05, 2020by Johan"></Card6>
                <Card6 x="Stevenson" pic={prof4} work="Explore The Best Restaurant in New York" name="Dec. 05, 2020by Johan"></Card6>

            </div>


        </div>
    )
}

export default Ourblog