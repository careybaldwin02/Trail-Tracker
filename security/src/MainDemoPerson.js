/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import SideBar from "./SideBar.js";
import Header from "./Header";
import VideoTrace from "./VideoTrace";
import MapControlBarPerson from "./MapControlBarPerson";
import "./App.css";
// import staticmap from "./img/staticmap.png";
import singletrail from "./img/singletrail.png"
import Modal from './Modal';

class MainDemoLocation extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true // for map controls
        };
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="main-demo-person">
                    <div>
                        <h1>Person Search: Maps and Videos</h1>
                        <i onClick={this.toggleHidden.bind(this)} class="far fa-play-circle"> <b>Video Demo</b> </i>
                    </div>
                    {!this.state.isHidden &&
                        <Modal>
                            <div>
                                <i onClick={this.toggleHidden.bind(this)} className="fas fa-times"></i>
                                <div className="video-trace">
                                    <div className="video-info">
                                        <p>With our technology, it is possible to search a location within a specificed time frame and view the paths of unique phone signals.
                                            The video below is an example of a visualization that could be generated based on geolocation tracking.
                                            <a href="https://www.zeit.de/datenschutz/malte-spitz-data-retention" target="_blank" >  Citation</a>
                                        </p>
                                    </div>
                                    <VideoTrace />
                                </div>
                            </div>
                        </Modal>}
                    <div className="form">
                        <div className="video-info">
                            <p>
                                The demonstration below shows how a user could input a person's
                                name and time frame. The map would then display the path of the
                                corresponding phone signal. This could be implemented with the
                                google maps API in combination with the Waypoints API.
                            </p>
                        </div>
                        <div className="inputs">
                            <h5>Please Enter a Name</h5>
                            <input placeholder="John Doe" />
                            <input placeholder="Tuesday 02/05/2019, 4:35 am to 5:25 am" />
                        </div>
                        <div className="button-group">
                            <button>Search</button>
                        </div>
                    </div>
                    {/* <div className="map-controls">
                        <h2 onClick={this.toggleHidden.bind(this)} >
                            Toggle Map-View / Map-Controls
                                <i className="fas fa-sliders"></i>
                            {!this.state.isHidden && <img src={mapcontrols} />}
                        </h2>
                    </div> */}
                    <br />
                    <MapControlBarPerson />
                    {/* <div className="map">
                        <img src={staticmap} />
                    </div> */}
                    <div className="map-trails-container">
                        <div className="map-trails">
                            <img src={singletrail} />
                        </div>
                        <div className="map-names">
                            <div className="search-results">
                                <h2><b>Search Results</b></h2>
                                <p>Person: John Doe</p>
                                <p>Tuesday 02/05/2019
                                <br />
                                    4:35 am to 5:25 am
                                <br />
                                    Max Radius: 2.5 mi.
                                </p>
                            </div>
                            <div>
                                <div className="input-name selector">
                                    <input type='checkbox' /><p>See all trails</p>
                                </div>
                                <div className="input-name jd">
                                    <input type='checkbox' checked /><h5>John Doe</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainDemoLocation;
