import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Card, CardImg } from 'react-bootstrap';
import Project from '../Project/Project';


const Projects = () => {
    const[projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data));
    },[])
    return (
        <div className='container my-5'>
            <h3 className="fw-bold">
                RECENT <span style={{ color: "#0C984C" }}>WORKS</span>
            </h3>
            <div className="row my-3">
               {
                   projects?.map(project=><Project key={project.title} project={project}></Project>)
               }
            </div>
        </div>
    );
};

export default Projects;