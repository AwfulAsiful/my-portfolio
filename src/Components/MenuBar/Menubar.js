import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import favicon from '../../Images/favicon.png'
const Menubar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
            <>
            <img src={favicon} alt="" className="favicon"/>
                <h2 className="navbar-brand fw-bold mt-2 fs-3">
                    ASIFUL
                   
                </h2>
             
            </>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navList" 
                
                id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to="/home" className="link-items">
                        <li className="nav-item">
                                Home
                        </li>
                        </Link>
                        <Link to="/blogs" className="link-items">
                        <li className="nav-item">
                               Blogs
                        </li>
                        </Link>
                        <Link to="/contact" className="link-items">
                        <li className="nav-item">
                                Contact
                        </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;



