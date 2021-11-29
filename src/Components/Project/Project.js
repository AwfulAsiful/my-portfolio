import React, { useEffect, useState } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
const Project = (props) => {
    const{title,img,desc}=props.project;
     
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return (
        <div className="col-md-4"
        data-aos="fade-zoom-in" data-aos-offset="460"  data-aos-duration="900">
            <Card className="my-3">
                <CardImg src={img} alt='' variant='top'/>
                <Card.Body>
                    <h3 style={{color:"#0C984C",fontWeight:"bold"}}>
                        {title}
                    </h3>
                    <p className="text-start">{desc}</p>
                    <button className="btn btn-outline-success">
                        Live Demo
                    </button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Project;