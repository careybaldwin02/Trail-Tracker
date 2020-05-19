import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import "./App.css";

class BlackList extends Component {
    render() {
        return (
            <div className="container">
                <SideBar />
                <Header />
                <div className="blacklist">
                    <div className="list-title">
                        <h1>Watch List</h1>
                    </div>
                    <div className="add-item">
                        <button>Add a New Entry</button>
                        <button>Add a New Group</button>
                    </div>
                    <div className="blacklist-item">
                        <h4>Home Alarm System</h4>
                        <Link to="/list-controls">
                            <button>
                                <b>edit</b>
                            </button>
                        </Link>
                        <button>add/remove shortcut</button>
                        <button className="e-d">enable/disable</button>
                    </div>

                    <div className="blacklist-item">
                        <h4>Known Gun Owners</h4>
                            <button>
                                edit
                            </button>
                        <button>add/remove shortcut</button>
                        <button className="e-d">enable/disable</button>
                    </div>

                    <div className="blacklist-item">
                        <h4>My Kids</h4>
                            <button>
                                edit
                            </button>
                        <button>add/remove shortcut</button>
                        <button className="e-d">enable/disable</button>
                    </div>

                    <div className="blacklist-item">
                        <h4>My Parents</h4>
                            <button>
                                edit
                            </button>
                        <button>add/remove shortcut</button>
                        <button className="e-d">enable/disable</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlackList;
