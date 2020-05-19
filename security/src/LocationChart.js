
import React, { Component } from 'react';

import SideBar from './SideBar.js';
import Header from './Header';
import chart from './img/chart.jpg';
import VideoTrace from './VideoTrace';
import './App.css'
import ChartControlBar from './ChartControlBar.js';
import Modal from './Modal';

class LocationChart extends Component {
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
                    <div>
                        <h1>Location Search: Chart View</h1>
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
                                The demonstration below shows how a user could input a location and time frame.
                                The chart would then display detailed information about the phone data within these specifications.
                            </p>
                        </div>
                        <div className="inputs">
                            <h5>Please Enter a Location</h5>
                            <input
                                placeholder="West Hartford, CT"
                            />
                            <input
                                placeholder="January 1, 2017 6:00 am - January 2, 6:00 am"
                            />
                        </div>
                        <div className="button-group">
                            <button>Search</button>
                        </div>
                        <div className="video-info">
                            A user could view a chart showing specific information related to the location searched.
                            Within this view the user could apply filters in order to achieve their desired information.
                            Please try the dropdown menu for some examples.
                        </div>
                    </div>
                    <div className="chart-container">
                        <ChartControlBar />

                        <div className="chart">
                            <div className="chart-top">
                                <div className="chart-title">
                                    <h3>Event Logs</h3>
                                </div>
                            </div>
                            <div className="chart-contents">
                                <div className="row row-title">
                                    <div className="col col-title col-select-1">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-title col-name-1">
                                        <p><b>Name</b></p>
                                    </div>
                                    <div className="col col-title col-time-1">
                                        <p><b>Time</b></p>
                                        <i class="fas fa-arrow-down"></i>
                                    </div>
                                    <div className="col col-title col-loc-1">
                                        <p><b>Location</b></p>
                                    </div>
                                    <div className="col col-title col-dur-1">
                                        <p><b>Duration</b></p>
                                    </div>
                                    <div className="col col-title col-prox-1">
                                        <p><b>Proximity (ft)</b></p>
                                    </div>
                                    <div className="col col-title col-watch-1">
                                        <p><b>Watchlist</b></p>
                                    </div>
                                    <div className="col col-title col-white-1">
                                        <p><b>Whitelist</b></p>
                                    </div>
                                    <div className="col col-title col-blink-1">
                                        <p><b>Blink Rate (sec)</b></p>
                                    </div>
                                    <div className="col col-title col-susp-1">
                                        <p><b>Suspicious Activity</b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>John Smith</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:36:19</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760536, -72.733112</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="dark"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="med"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-blink">
                                        <p>30</p>
                                    </div>
                                    <div className="col col-susp">

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>28-E0-2C-0B-92-B2</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:37:11</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760224, -72.733791</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="med"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="light"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-blink">
                                        <p>10</p>
                                    </div>
                                    <div className="col col-susp">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>Simon Waters</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:37:32</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760345, -72.733291</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="light"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="med"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-blink">
                                        <p>20</p>
                                    </div>
                                    <div className="col col-susp">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>DC-9B-9C-60-3E-38</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:38:05</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760625, -72.733091</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="dark"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="dark"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-blink">
                                        <p>30</p>
                                    </div>
                                    <div className="col col-susp">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>Chuck Santiago</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:38:18</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760412, -72.733007</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="light"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="med"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-blink">
                                        <p>10</p>
                                    </div>
                                    <div className="col col-susp">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>Laura Valine</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:38:47</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760294, -72.733204</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="med"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="light"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-blink">
                                        <p>20</p>
                                    </div>
                                    <div className="col col-susp">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-title col-select">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-name">
                                        <p>James Thompson</p>
                                    </div>
                                    <div className="col col-time">
                                        <p>3:39:52</p>
                                    </div>
                                    <div className="col col-loc">
                                        <p>41.760104, -72.733028</p>
                                    </div>
                                    <div className="col col-dur">
                                        <div className="light"></div>
                                    </div>
                                    <div className="col col-prox">
                                        <div className="med"></div>
                                    </div>
                                    <div className="col col-watch">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col col-white">
                                        <input type="checkbox" checked />
                                    </div>
                                    <div className="col col-blink">
                                        <p>30</p>
                                    </div>
                                    <div className="col col-susp">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-bottom">
                                <div className="global">
                                    <h4><b>Global Parameters</b></h4>
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
                                            <p><b>Excluded</b></p>
                                        </div>

                                        <div className="col">
                                            <p>Frequent Visitors</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-buttons">
                                    <div className="button-column">
                                        <button><b>Save This Log</b></button>
                                        <button><b>View Saved Logs</b></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="chart">
                            <img src={chart} />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }

}

export default LocationChart;