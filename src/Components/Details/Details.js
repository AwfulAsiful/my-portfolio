import { Carousel } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Menubar from '../MenuBar/Menubar';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    useEffect(() => {
        if (details.length > 0) {
            const found = details?.find((detail) => parseInt(detail?.id) === parseInt(id))
            setSpecificDetails(found);

        }
    }, [details, id])

    return (
        <div className="container-fluid">
            <Menubar></Menubar>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <h2 className="fw-bold mb-4">Screenshots</h2>

                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={specificDetails.img2} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={specificDetails.img3} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={specificDetails.img4} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev btn btn-dark"
                               /*  style={{backgroundColor:"rgba(255, 255, 255, 0.849)"}} */

                                type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next btn btn-dark"
                                /* style={{backgroundColor:"rgba(255, 255, 255, 0.849)"}} */
                                type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>



                            {/* <div className="col-md-4"><img src={specificDetails.img2} alt="" className="" width="400px" /></div>
                            <div className="col-md-4"><img src={specificDetails.img3} alt="" className="" width="400px" /></div>
                            <div className="col-md-4"><img src={specificDetails.img4} alt="" className="w-100" /></div> */}
                        </div>
                    </div>
                    <div className="col-md-4 text-start">
                        <h2 className="fw-bold text-success">
                            {specificDetails.title}
                        </h2>
                        <p>
                            {specificDetails.moreDesc}
                        </p>
                        <div>
                            {
                                specificDetails.id === "1" || specificDetails.id === "2" ? (
                                    <>
                                        <a href={specificDetails.url} target="_blank" rel="noreferrer" className="mt-3 me-3">
                                            <button className="btn btn-success">Preview</button>
                                        </a>
                                        <a href={specificDetails.clientSide} target="_blank" rel="noreferrer" className="my-3 me-2">
                                            <button className="btn btn-dark">Client Side</button>
                                        </a>
                                        <a href={specificDetails.serverSide} target="_blank" rel="noreferrer" className="ms-3">
                                            <button className="btn btn-success">Server Side</button>
                                        </a>
                                    </>
                                ) : (

                                    <> <a href={specificDetails.url} target="_blank" rel="noreferrer" className="mt-3 me-3">
                                        <button className="btn btn-success">Preview</button>
                                    </a>
                                        <a href={specificDetails.githubRepo} target="_blank" rel="noreferrer">
                                            <button className="btn btn-dark">Github</button>
                                        </a></>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;