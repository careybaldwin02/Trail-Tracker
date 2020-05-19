import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header';
import ScrollToTop from './ScrollToTop.js';
import './App.css';
import mapcontrols from './img/mapcontrols.jpg';

const MapControls = () => {
    return (
        <div className="container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div>
            </div>
            <br />
            <div>
                <Link to='/location-demo'>
                    <i class="fas fa-arrow-left">   Back to Maps and Videos</i>
                </Link>
            </div>
            <br />
            <div className="map-controls">
                <img src={mapcontrols} />
            </div>
        </div>
    )
};

export default MapControls;