import React from 'react'
import Card4 from '../components/Card4'
import pic1 from '../assets/strategy.png'
import pic2 from '../assets/seo.png'
import pic3 from '../assets/user2.png'
import Card from '../components/Card'


const Middle3 = () => {
    return (
        <div className='container-fluid-md bg-white middle3row1'>
            <div className="container-md gap-3 d-flex">
                <Card4 work="Easy Management" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." pic={pic1}></Card4>
                <Card4 work="Protect Your Profile" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." pic={pic2}></Card4>
                <Card4 work="Private Community" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." pic={pic3}></Card4>
                <Card4 work="24/7 Help Support" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." pic={pic1}></Card4>
            </div>

        </div>
    )
}

export default Middle3