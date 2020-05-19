/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import {Link} from 'react-router-dom';

import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import prospectus from './docs/prospectus.pdf'

const Prospectus = () => {
    return (
        <div className = "container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className = "docs">
                
                <div>
                <Link to = "summary-docs">
                <i class="fas fa-arrow-left">   Back to Summary Docs</i> 
                </Link>
                </div>
                <br />
               
                 <iframe src={prospectus} width="820" height="1800"></iframe>
            </div>
        </div>
    )};

export default Prospectus;