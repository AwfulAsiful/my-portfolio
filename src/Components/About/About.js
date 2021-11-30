import React, { useEffect } from 'react';
import banner2 from '../../Images/Banner.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div className="container my-5">
            <h3 className="fw-bold me-4"
                data-aos='slide-left'
                data-aos-offset="460"
                data-aos-duration="900">
                <span style={{ color: '#0C984C' }}>About</span> Me</h3>
            <div className="row mt-4">
                <div className="col-md-5 col-sm-5"
                    data-aos='fade-zoom-in'
                    data-aos-offset="500"
                    data-aos-duration="700">
                    <img src={banner2} alt="" className="w-100" />
                </div>
                <div className="col-md-7 col-sm-7 mt-4 text-start" data-aos='fade-zoom-in'
                    data-aos-offset="500"
                    data-aos-duration="800">
                    <h4 className="fw-bold">First and foremost, graciously <br />accept my best regards</h4>
                    <p className="">
                       I regard myself as a Junior front end developer.Specifically, I am <span className="fw-bold">ReactJs developer</span>.I am making react
                       applications for more than 6 months or so. <br /> Before that,
                       I was making static websites and PSD to HTML conversion. <br />
                       I am familiar with react-router and its my daily driver for creating react applications. I use <span className="fw-bold">Bootstrap</span> as my primary CSS Framework but also <br /> have good understading about <span className="fw-bold">tailwind CSS,Material Design</span>. <br /> I don't actually have any working experience but I've completed the <br /> <span className="fw-bold">Complete Web Development Course by Jhankar Mahbub</span>. I like to code <br /> things from scratch, and enjoy bringing ideas to life in the browser.<br /> I usually prefer clean,minimal design patterns and simple content structure.
                      </p>
                    <Link to="/contact">
                    <button className="btn btn-success">
                        Contact
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;