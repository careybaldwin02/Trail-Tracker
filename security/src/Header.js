import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SideBar from "./SideBar";

class Header extends Component {
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
            <div className="header">
                <Link to={"/favorites"}>
                    <div className="favorites-icon">
                        <i className="fas fa-star" />
                    </div>
                </Link>

                <div className="perptrac">
                    <Link to="/main">
                        <div className="title-logo">
                            <h1>TrailTracker</h1>
                            {/* <i class="fas fa-map-marker-alt faa-pulse animated"></i> */}
                            <i class="fas fa-map-pin faa-pulse animated" />
                        </div>
                        <p>The Next Generation of Physical Surveillance</p>
                    </Link>
                </div>

                <div className="amazon">
                    <a href={"http://www.amazon.com"} target="_blank">
                        <i class="fab fa-amazon" />
                    </a>
                </div>
                <div>
                    <i
                        onClick={this.toggleHidden.bind(this)}
                        className="fas fa-ellipsis-v"
                    />
                </div>
                {!this.state.isHidden && (
                    <div className="dropdown-modal-container">
                        <div className = "dropdown-modal">
                            <i class="fas fa-video" />
                            <i class="fas fa-bell" />
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Header;
