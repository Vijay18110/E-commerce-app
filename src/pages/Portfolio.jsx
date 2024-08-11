import React from 'react'
import Card2 from '../components/Card2'
import prof1 from '../assets/professionalpic1.jpg'
import prof2 from '../assets/professionalpic2.jpg'
import prof3 from '../assets/professionalpic3.jpg'
import prof4 from '../assets/professionalpic4.jpg'

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
                <Card2 pic={prof1} name="Branding, Printing" work="High Quality Design Concept"></Card2>
                <Card2 pic={prof2} name="Graphic Design" work="High Quality Design Concept
"></Card2>
                <Card2 pic={prof3} name="Web Development" work="High Quality Design Concept"></Card2>
                <Card2 pic={prof4} name="Web Development" work="High Quality Design Concept"></Card2>
            </div>
            <p class="d-flex gap-2 p-2 pt-5">
                <div className='portfolioa1'>
                    <a href="#" className=" btn text-center text-white  align-items-center"><span>VIEW MORE PORTFOLIO</span> <br /><span> </span></a>
                </div>
            </p>
            <div className='container-fluid line mt-5'></div>
        </div>
    )
}

export default Portfolio