import React, { useEffect } from 'react';
import Menubar from '../MenuBar/Menubar';
import contact from '../../Images/contact.png'
import AOS from "aos";
import "aos/dist/aos.css";
import facebook from '../../Images/facebook.svg'
import instagram from '../../Images/instagram.svg'
import twitter from '../../Images/twitter.svg'
import telegram from '../../Images/telegram.svg'
import whatsapp from '../../Images/whatsapp.svg'
import linkedin from '../../Images/linkedin.svg'
import github from '../../Images/github.svg'
const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (

        <div className="container-fluid">
            <Menubar></Menubar>

            <div className="container text-start mb-3">
                <div className="row g-0"
                    data-aos="fade-zoom-in" data-aos-offset="500"
                    data-aos-anchor-placement='top-bottom'
                    data-aos-delay="500"
                    data-aos-duration="1000">

                    <div className="col-md-6" style={{ marginTop: "4rem" }}
                    >
                        <h3 className="my-5 fw-bold"
                            style={{ marginRight: "10em" }}>
                            <span
                                style={{ color: "#0c984c" }}>
                                Get In
                            </span> Touch
                        </h3>
                        <form target="_blank" action="https://formsubmit.co/awful872@gmail.com" method="POST">
                            <div className="form-group">
                                <div className="form-row">

                                    <div className="col my-3">
                                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                                        <input type="hidden" name="_autoresponse" value="Thank you for appreciation" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-success ">Submit Form</button>

                        </form>
                    </div>
                    <div className="col-md-6 mt-5 ">

                        <div className="d-flex align-items-center">
                            <img src={contact} alt="" className="w-75" />

                            <div className="ms-4">
                                <a href="https://www.facebook.com/awfulasiful" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={facebook} alt="" className="w-25" /></div>
                                </a>
                                <a href="https://www.instagram.com/awful_asiful/" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={instagram} alt="" className="w-25" /></div>
                                </a>
                                <a href="https://twitter.com/iAsiful" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={twitter} alt="" className="w-25" /></div>
                                </a>
                                <a href="https://www.linkedin.com/in/asiful-islam-904a3a226/" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={linkedin} alt="" className="w-25" /></div>
                                </a>
                                <a href="https://github.com/AwfulAsiful" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={github} alt="" className="w-25" /></div>
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={telegram} alt="" className="w-25" /></div>
                                </a>
                                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="my-3"><img src={whatsapp} alt="" className="w-25" /></div>
                                </a>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;