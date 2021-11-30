import React from 'react';
import html from '../../Images/html5.svg'
import css from '../../Images/css3.svg'
import bootstrap from '../../Images/bootstrap.svg'
import tailwind from '../../Images/tailwindcss.svg'
import mui from '../../Images/mui.svg'
import sass from '../../Images/sass.svg'
import git from '../../Images/git.svg'
import vscode from '../../Images/visualstudiocode.svg'
import reactsvg from '../../Images/react.svg'
import javascript from '../../Images/javascript.svg'
import figma from '../../Images/figma.svg'
import firebaseSvg from '../../Images/firebase.svg'
import './tech.css'
const Tech = () => {
    return (
        <div className="container-fluid mb-5">
            <h2 className="fw-bold">
               <span style={{color:"#0c984c"}}>
               Technologies 
                </span> I <span style={{color:"#0c984c"}}>
               Use 
                </span>
            </h2>
            <div className="row my-5 gy-4 tech-icons">
                <div className="col-md-2">
                    <img src={html} alt="" className=""/>
                </div>
                <div className="col-md-2">
                    <img src={css} alt=""className=""  />
                </div>
                <div className="col-md-2">
                    <img src={bootstrap} alt="" className="" />
                </div>
                <div className="col-md-2">
                    <img src={tailwind} alt=""className=""  />
                </div>
                <div className="col-md-2">
                    <img src={mui} alt="" className="" />
                </div>
                <div className="col-md-2">
                    <img src={sass} alt="" className="" />
                </div>
                <div className="col-md-2">
                    <img src={javascript} alt="" className="bg-dark" />
                </div>
                <div className="col-md-2">
                    <img src={reactsvg} alt="" className="" />
                </div>
                <div className="col-md-2">
                    <img src={git} alt="" className="" />
                </div>
                <div className="col-md-2">
                    <img src={vscode} alt=""className=""  />
                </div>
                <div className="col-md-2">
                    <img src={figma} alt=""className=""  />
                </div>
                <div className="col-md-2">
                    <img src={firebaseSvg} alt=""className=""  />
                </div>
                  
               
            </div>
        </div>
    );
};

export default Tech;