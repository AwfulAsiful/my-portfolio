import React, { useEffect } from 'react';
import Menubar from '../MenuBar/Menubar';
import contact from '../../Images/contact.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
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
                        <h3 className="my-5"
                            style={{ marginRight: "10em" }}>
                            <span
                                style={{ color: "#0c984c" }}>
                                Contact
                             </span> Me
                        </h3>
                        <form target="_blank" action="https://formsubmit.co/awful872@gmail.com" method="POST">
                            <div class="form-group">
                                <div class="form-row">
                                   
                                    <div class="col my-3">
                                        <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                                        <input type="hidden" name="_autoresponse" value="Thank you for appreciation"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group my-3">
                                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-success ">Submit Form</button>
                            
                        </form>
                    </div>
                    <div className="col-md-6 mt-5">

                        <img src={contact} alt="" className="w-75" />




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;