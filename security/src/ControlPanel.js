/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import configcontrol from './img/configcontrol.jpg';
import SideBar from './SideBar';
import Header from './Header';
import './App.css';


class ControlPanel extends Component {
  render() {
    return (
    <div className = "container">
            <SideBar />
            <Header />
        <div className="settings">

        <h1>General Control Panel</h1>
        <img src={configcontrol} />
        
        </div>

      </div>
    );
  }
}

export default ControlPanel;