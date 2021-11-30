import React from 'react';
import serviceBanner from '../../Images/Banner-4.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import psdToHtml from '../../Images/psdtohtml.png'
import reactSvg from '../../Images/react.svg'
import javaSript from '../../Images/javascript.svg'
const Services = () => {
    return (
        <div className="container-fluid">
                <h2 className="my-5 fw-bold">Timeline</h2>
            <VerticalTimeline lineColor="black" className="my-4">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"

                    contentStyle={{ background: '#fff', color: '#33312b' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="2021-Present"
                    iconStyle={{ background: '#0c984c', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title fw-bold">
                        PSD To <span className="text-success">HTML</span>
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Chattogram, BD</h4>
                    <img src={psdToHtml} alt="" className="w-75" />
                    <p>
                        I have been providing web design and development services to agencies and businesses across the marketplace since 2021. If you need Photoshop design to HTML conversion service, feel free to knock me.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    date="2021-present"
                    contentStyle={{ background: '#fff', color: '#33312b' }}
                    iconStyle={{ background: '#0c984c', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">
                        <span className="text-success">JavaScript</span> Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Chattogram, BD</h4>

                    <div>
                        <p> I did some interesting  <span className="text-success">JavaScript</span>  projects under the mentorship of Jhankar Mahbub and Programming Hero Team.Here are some of my projects built with vanilla Js.</p>
                        <img src={javaSript} alt="" className="w-25 bg-dark"/>
                        <div className="my-3">
                            <a href="https://mac-book-pro-simple.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="btn btn-dark my-2 me-2">Macbook Pro</button>

                            </a>
                            <a href="https://basic-js-dom-event.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="btn btn-success me-2">Baap-er-bank</button>
                            </a>
                            <a href="https://more-dom-event.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="btn btn-dark my-3">
                                    Iphone Shopping
                                </button>
                            </a>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    date="2021-present"
                    contentStyle={{ background: '#fff', color: '#33312b' }}
                    iconStyle={{ background: '#0c984c', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">
                        Intregating <span className="text-success">REST API</span>
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Chattogram, BD</h4>
                    <div>
                        <p className="mb-3">
                            Working with REST API was merrymaking.
                            REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.
                            Here are some my RESTful API projects:
                        </p>
                        <a href="https://weather-shower.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-success me-2">Weather Teller</button>
                        </a>

                        <a href="https://book-store-rest-api.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-dark me-2">Book Store</button>
                        </a>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    date="2021-present"
                    iconStyle={{ background: '#0c984c', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">
                        Create-<span className="text-success">
                            React-
                        </span>App
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Chattogram, BD</h4>
                    <div className="my-2">
                        <img src={reactSvg} alt="" className="w-25" />
                        <p>
                            Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration

                        </p>
                    </div>
                </VerticalTimelineElement>




            </VerticalTimeline>
        </div>
    );
};

export default Services;