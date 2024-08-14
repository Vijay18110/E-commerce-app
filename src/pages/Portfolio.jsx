import React from 'react'
import Card2 from '../components/Card2'
import prof1 from '../assets/professionalpic1.jpg'
import prof2 from '../assets/professionalpic2.jpg'
import prof3 from '../assets/professionalpic3.jpg'
import prof4 from '../assets/professionalpic4.jpg'
import Cardx from '../Cardx'
import Button from '../components/Button'

const Portfolio = () => {
    return (
        <div className='container-fluid  portfoliorow1 '>
            <div className='container middlerow4 pt-5'>
                <div className=' text-primary'> Our Portfolio</div>
                <div className="h1 text-dark">Our Awesome Work</div>
                <div className='text-muted'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove.
                </div>
            </div>

            <div className='container-fluid d-flex pt-5 gap-3'>
                <Cardx logo={prof1} title="Branding, Printing" p="High Quality Design Concept"></Cardx>
                <Cardx logo={prof2} title="Graphic Design" p="High Quality Design Concept
"></Cardx>
                <Cardx logo={prof3} title="Web Development" p="High Quality Design Concept"></Cardx>
                <Cardx logo={prof4} title="Web Development" p="High Quality Design Concept"></Cardx>
            </div>
            <div className="conatiner justify-content-center mt-3 mx-auto d-flex">
                <Button span="VIEW MORE PORTFOLIO" ></Button>
            </div>

            <div className='container-fluid line mt-5'></div>
        </div>
    )
}

export default Portfolio