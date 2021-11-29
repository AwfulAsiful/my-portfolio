import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const Menubar = () => {
    
    return (
        <div className='container-fluid sticky-top'
       >
            <div className="row bg-dark text-white p-2">
                <div className="col-md-4 col-sm-4">
                    <h3 className="fw-bold">
                        ASIFUL
                    </h3>
                </div>
                <div className="col-md-8 col-sm-8">
                    <ul className="mav-items">
                        <Link to='/home' className='link-items'>
                        <li>HOME</li>
                        </Link>
                        <Link to='/home' className='link-items'>
                        <li>ABOUT</li>
                        </Link>
                        <Link to='/home' className='link-items'>
                        <li>RESUME</li>
                        </Link>
                        <Link to='/contact' className='link-items'>
                        <li>CONTACT</li>
                        </Link>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Menubar;