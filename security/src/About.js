import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import SideBar from './SideBar.js';
import Header from './Header.js';


class About extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="about">
                    <div className="about-menu">
                        <h1>About</h1>
                        <ul className="outside-list">
                            <Link to={'/summary-docs'}>
                                <li><h3><b>Overview</b></h3></li>
                            </Link>
                            <li><h3>Help</h3>
                                <ul className="inside-list">
                                    <Link to={'/summary-docs'}>
                                        <div>
                                            <li><h3><b>FAQs</b></h3></li>
                                        </div>
                                    </Link>
                                    {/* <Link to = {'/user-manual'}> */}
                                    <div>
                                        <li><h3>User Manual</h3></li>
                                    </div>
                                    {/* </Link> */}
                                    {/* <Link to = {'/contact-support'}> */}
                                    <div>
                                        <li><h3>Contact Support</h3></li>
                                    </div>
                                    {/* </Link> */}
                                </ul>
                            </li>
                            <Link to={'/development-team'}>
                                <div>
                                    <li><h3><b>Development Team</b></h3> </li>

                                </div>
                            </Link>
                            <div>
                                <li><h3>Report Abuse</h3></li>
                            </div>
                            <Link to={'/privacy'}>
                                <div>
                                    <li><h3><b>Privacy Policy</b></h3></li>
                                </div>
                            </Link>

                            <li><h3><a href={"http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10045156.PN.&OS=PN/10045156&RS=PN/10045156"} target="_blank">
                                Patent No: US 10,045,156;</a></h3>
                            </li>
                            <li><h3>
                                Version .01
        </h3></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;