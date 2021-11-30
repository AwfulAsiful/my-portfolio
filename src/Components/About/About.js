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
            <h3 className="fw-bold me-5"
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
                    <p className="fs-5">
                        Junior front end developer with 7 months of work experience
                        in front end web development.
                        Have a good command of
                        modern web design and styles. Fabricated,emphasized
                        and maintained websites using HTML,CSS,JavaScript.
                        Developed and maintained front end functionality
                        of a website. Implemented NoSQL database(Mongodb Atlas).
                        Have a thorough understanding of website version
                        control tools like- Git SCM

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