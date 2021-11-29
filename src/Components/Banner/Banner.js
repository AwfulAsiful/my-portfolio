import React, { useEffect, useState } from 'react';
import banner from '../../Images/Banner-3.png'
import AOS from "aos";
import "aos/dist/aos.css";
import './Bannner.css'
const Banner = () => {
    
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-7 col-sm-7 banner-text"
                >
                    <h2 className="fw-bold fs-1" data-aos="fade-zoom-in" data-aos-offset="460"  data-aos-duration="900">

                        Hi,I'm Asiful Islam <br />
                        <span className='designation'>
                            Frontend Web Dev
                        </span> <br />
                        Based in Bangladesh.

                    </h2>
                    <div className="mt-3"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                        <button className="btn btn-success">
                            Resume
                        </button>
                        <button className="btn btn-dark ms-2">
                            Hire Me
                        </button>
                    </div>
                </div>
                <div className="col-md-5 col-sm-5 mt-4"
                data-aos="fade-down"
                data-aos-offset="550"
                data-aos-easing="ease-in-sine"
                data-aos-duration="400">
                    <img src={banner} alt="" className='w-100' />
                </div>
            </div>


        </div>
    );
};

export default Banner;