/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import executive from './docs/executive.pdf';


const Executive = () => {
    return (
        <div className = "container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div>
                <Link to = "summary-docs">
                <i class="fas fa-arrow-left">   Back to Summary Docs</i> 
                </Link>
            </div>
            <br />

            <div className = "docs">
                <iframe src={executive} width="820px" height="1800px"></iframe>
            </div>
        </div>
    )};

export default Executive;