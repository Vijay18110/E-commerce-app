import React from 'react'
import prof1 from '../assets/professionalpic1.jpg'
import prof2 from '../assets/professionalpic2.jpg'
import prof3 from '../assets/professionalpic3.jpg'
import prof4 from '../assets/professionalpic4.jpg'
import Card6 from '../components/Card6'
import Cardx from '../Cardx'

const Ourblog = () => {
    return (
        <div className='container-fluid  p portfoliorow1 '>
            <div className='container-md middlerow4 pt-5'>
                <div className=' text-primary'> Our Blog</div>
                <div className="h1 text-dark">Recent Blog
                </div>
                <div className='text-muted'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove.
                </div>
            </div>
            <div className='conatiner d-flex  mt-5 gap-3 '>
                <Cardx x="Stevenson" logo={prof1} p="Explore The Best Restaurant in New York" title="Dec. 05, 2020by Johan"></Cardx>

                <Cardx x="Stevenson" logo={prof2} p="Explore The Best Restaurant in New York" title="Dec. 05, 2020by Johan"></Cardx>
                <Cardx x="Stevenson" logo={prof3} p="Explore The Best Restaurant in New York" title="Dec. 05, 2020by Johan"></Cardx>
                <Cardx x="Stevenson" logo={prof4} p="Explore The Best Restaurant in New York" title="Dec. 05, 2020by Johan"></Cardx>

            </div>


        </div>
    )
}

export default Ourblog