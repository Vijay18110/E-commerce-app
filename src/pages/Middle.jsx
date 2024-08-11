import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import logo1 from '../assets/bulb.png'
import logo2 from '../assets/user2.png'
import logo3 from '../assets/seo.png'
import logo4 from '../assets/business.png'
import logo5 from '../assets/strategy.png'
import img from '../assets/about.svg'
import Card2 from '../components/Card2'
import prof1 from '../assets/professionalpic1.jpg'
import prof2 from '../assets/professionalpic2.jpg'
import prof3 from '../assets/professionalpic3.jpg'
import prof4 from '../assets/professionalpic4.jpg'
import Card3 from '../components/Card3'

const Middle = () => {
    return (
        <div className='container middlecontainer'>
            <div className='row'>
                <div className='col-md-4 col1'>
                    <div className='h6 text-primary'> OUR SERVICES</div>
                    <div className='h1'>  We Provide A Lot of Cool Services </div>
                    <div className='h6 text-muted'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
                    <Button span1="Our Services"></Button>
                </div>
                <div className='col-md-8  col8'>
                    <div className='d-flex'>
                        <Card logo={logo2} title="Marketing" p="Even the all-powerful Pointing has no control about the blind texts"></Card>
                        <Card logo={logo3} title="SEO" p="Even the all-powerful Pointing has no control about the blind texts"></Card>
                        <Card logo={logo3} title="UI/UX design" p="Even the all-powerful Pointing has no control about the blind texts"></Card>
                    </div>
                    <div className='d-flex'>
                        <Card logo={logo1} title="Creative" p="Even the all-powerful Pointing has no control about the blind texts"></Card>
                        <Card logo={logo5} title="Optimization" p="Even the all-powerful Pointing has no control about the blind texts"></Card>
                        <Card logo={logo4} title="Business Strategy" p="Even the all-powerful Pointing has no control about the blind texts"></Card>
                    </div>






                </div>
            </div>
            <div className='container text-center'>
                <div className='row d-flex justify-content-center  middlerow2'>
                    <div className="col-md p-0 middlerow2col">

                        <img src={prof1} alt="" className='w-100 ' />
                    </div>


                    <div className="col-md">
                        <div className='h1 text-primary'> 900+</div>
                        <div className="h3 text-muted">Project Done</div>
                    </div>
                    <div className="col-md">
                        <div className='h1 text-primary'> 500+</div>
                        <div className="h3 text-muted">Optimize Sites</div>
                    </div>
                    <div className="col-md">
                        <div className='h1 text-primary'> 770+</div>
                        <div className="h3 text-muted">Coffee Cups</div>
                    </div>
                    <div className="col-md">
                        <div className='h1 text-primary'> 1000+</div>
                        <div className="h3 text-muted">                    Happy People
                        </div>
                    </div>
                </div>
            </div>

            <div className='container  middlerow3'>
                <div className='row'>
                    <div className="col-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-6">

                        <div className='h5 text-primary'> About Us</div>
                        <div className="h1 text-dark">   Unbrew A Digital Agency Company</div>
                        <div className='text-muted'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </div>
                        <Button span1="More About us"></Button>
                    </div>

                </div>
            </div>

            <div className='container middlerow4'>
                <div className='text-primary'> Team</div>
                <div className="h1 text-dark">Our Digital Experts Team</div>
                <div className='text-muted'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove.
                </div>
            </div>


            <div className="container">
                <div className='middlerow5 gap-2'>
                    <Card2 pic={prof1} name="Adrian Molises" work="CEO, Founder & Developer"></Card2>
                    <Card2 pic={prof2} name="Arthur MaGregor" work="CEO, Founder & Developer"></Card2>
                    <Card2 pic={prof3} work="CEO, Founder & Developer" name="Anna Hanzen"></Card2>
                    <Card2 pic={prof4} work="CEO, Founder & Developer" name="Brian Wooden"></Card2>
                </div>
            </div>
            <div className='container-fluid '>
                <div className='container middlerow4'>

                    <div className='text-primary'> Testimonial</div>
                    <div className="h1 text-dark">Happy Customers</div>
                    <div className='text-muted'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove.
                    </div>
                </div>

                <div className='container middlerow5 '>
                    <Card3 pic={prof1} name="Roger Scott" work="Marketing Manager" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.">  </Card3>
                    <Card3 pic={prof2} name="Roger Scott" work="Marketing Manager" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.">  </Card3>
                    <Card3 pic={prof3} name="Roger Scott" work="Marketing Manager" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.">  </Card3>
                </div>
            </div>
        </div >
    )
}

export default Middle