import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import blacklistprofile from './img/blacklistprofile.jpg';


class Settings extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                {/* <h1>Profile of Chuck Santiago</h1> */}
                <div className="perp-demo">
                    <div className="perp-demo-list">
                        <h1>Chuck Santiago</h1>
                        <ul>
                            <li><h3>Saved Search Results</h3></li>
                            <Link to={'/blacklist-profile'}>
                                <li><h3><b>Profile</b></h3></li>
                            </Link>
                            <li><h3>Current Location</h3></li>
                            <li><h3>Share Information</h3></li>
                            <li><h3>Add to Watchlist</h3></li>
                            <li><h3>Add to Whitelist</h3></li>
                            <li><h3><i class="fas fa-shopping-cart"></i>Purchase Information</h3></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Settings;