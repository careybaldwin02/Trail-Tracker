import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import './App.css';
import blacklistprofile from './img/blacklistprofile.jpg';
import Header from './Header';

const BlackListDemo = () => {
    return (
        <div className = "container">
        <div>
        <SideBar />
        <Header />
        </div>
        <div id = "page-wrap">
        <div className = "map-controls">
        <img src={blacklistprofile} />

        <div>
        <i class="fas fa-shopping-cart"></i>
        <a href="#"> Purchase Information</a>
        </div>

        </div>
        </div>
        </div>

    )};

export default BlackListDemo;