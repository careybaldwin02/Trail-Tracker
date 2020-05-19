
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import SideBar from './SideBar.js';
import chart from './img/chart.jpg';
import './App.css'
import ChartControlBarPerson from './ChartControlBarPerson.js';
import VideoTrace from './VideoTrace';
import Modal from './Modal';
import searchcontrols from './img/searchcontrols.jpg';

class PersonChart extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true, // for map controls
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div className="container">

                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="chart-view">
                    <h1>Person Search: Chart View</h1>
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
                            The demonstration below shows how a user could input a person's name and time frame.
                            The chart would then display information about that individual.
                            The information displayed could be customized according to user preference.
                            </p>
                    </div>
                    <div className="inputs">
                        <h5>Please Enter a Name</h5>
                        <input
                            placeholder="John Doe"
                        />
                        <input
                            placeholder="January 1, 2017 6:00 am - January 2, 6:00 am"
                        />
                    </div>
                    <div className="button-group">
                        <button>Search</button>
                    </div>
                </div>
                <div className="chart-container">
                    <ChartControlBarPerson />

                    <div className="chart">
                        <div className="chart-top">
                            <div className="chart-title">
                                <h3>Event Logs</h3>
                            </div>
                        </div>
                        <div className="person-chart-contents">
                            <div className="row row-title">
                                <div className="col p-col-title col-time-1">
                                    <p><b>Time</b></p>
                                    <i class="fas fa-arrow-down"></i>
                                </div>
                                <div className="col p-col-title col-loc-1">
                                    <p><b>Location</b></p>
                                </div>
                                <div className="col p-col-title col-prox-1">
                                    <p><b>Proximity (ft)</b></p>
                                </div>
                                <div className="col p-col-title col-blink-1">
                                    <p><b>Blink Rate (sec)</b></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:36:19</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760536, -72.733112</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="med"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>30</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:37:11</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760224, -72.733791</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="light"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:37:32</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760345, -72.733291</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="med"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>20</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:38:05</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760625, -72.733091</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="dark"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>30</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:38:18</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760412, -72.733007</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="med"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:38:47</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760294, -72.733204</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="light"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>20</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-time">
                                    <p>3:39:52</p>
                                </div>
                                <div className="col col-loc">
                                    <p>41.760104, -72.733028</p>
                                </div>
                                <div className="col col-prox">
                                    <div className="med"></div>
                                </div>
                                <div className="col col-blink">
                                    <p>30</p>
                                </div>
                            </div>
                        </div>
                        <div className="chart-bottom">
                            <div className="global">
                                <h4><b>Global Parameters</b></h4>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Name</b></p>
                                    </div>
                                    <div className="col">
                                        <p>John Doe</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Address</b></p>
                                    </div>
                                    <div className="col">
                                        <p>111 Elm St., West Hartford, CT</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Center</b></p>
                                    </div>
                                    <div className="col">
                                        <p>41.760412, -72.733007</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Duration</b></p>
                                    </div>
                                    <div className="col">
                                        <p>45 minutes</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Radius</b></p>
                                    </div>
                                    <div className="col">
                                        <p>0.3 miles</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Duplicate Interval</b></p>
                                    </div>
                                    <div className="col">
                                        <p>1 day</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Suspicious Activity</b></p>
                                    </div>
                                    <div className="col">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="person-actions">
                                <div className="button-column">
                                    <button><b>Save This Log</b></button>
                                    <button><b>View Saved Logs</b></button>
                                </div>
                                <div className="input-column">
                                    <div className="person-input">
                                        <input type="checkbox" /><p>See all trails</p>
                                    </div>
                                    <div className="person-input">
                                        <input type="checkbox" checked/><p>Watchlist</p>
                                    </div>
                                    <div className="person-input">
                                        <input type="checkbox" /><p>Whitelist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="chart">
                            <img src={chart} />
                        </div> */}
                </div>
            </div>
        )
    }

}

export default PersonChart;