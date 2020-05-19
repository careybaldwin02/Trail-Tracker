import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlPanel from './ControlPanel';

import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';


class Settings extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="settings-container">
                    <div className="settings">

                        <h1>Settings</h1>

                        <Link to="/control-panel">
                            <h3><b>Control Panel</b></h3>
                        </Link>
                        {/* link to list of names, one name links to black list detail fig 8*/}
                        <Link to='/blacklist'>
                            <h3><b>Access your Watchlist</b></h3>
                        </Link>

                        {/* link to list of names */}
                        <Link to='/whitelist'>
                            <h3><b>Access your Whitelist</b></h3>
                        </Link>

                        <Link to='/list-controls'>
                            <h3><b>Access your List Controls</b></h3>
                        </Link>

                    </div>
                </div>

            </div>
        );
    }
}

export default Settings;