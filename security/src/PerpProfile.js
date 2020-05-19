/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import blacklistprofile from './img/blacklistprofile.jpg';

const ListControls = () => {
    return (
        <div className="container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className="page-wrap">
                <div className="blacklist-profile">
                    <img src={blacklistprofile} />
                </div>
            </div>
        </div>
    )
};

export default ListControls;