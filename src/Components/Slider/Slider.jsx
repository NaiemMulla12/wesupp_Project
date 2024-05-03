import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Slider.css'

// import impedance from './impedance.png'
import microsoft from './microsoft.avif'
// import csk from './csk.jpg'
// import mi from './mi.png'
// import rcb from './rcb.avif'
//import boat from './boat.png'


function Slider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
                <div className='inside'>
                    <img src={microsoft} alt="" />
                </div>
               
            </Carousel>;

        </>

    )
}

export default Slider