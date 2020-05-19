import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import "./App.css";

class WhiteList extends Component {
  render() {
    return (
      <div className="container">
        <SideBar />
        <Header />
        <div className="blacklist">
          <div className="list-title">
            <h2>White List</h2>
          </div>

          <div className="add-item">
            <button>Add a New Entry</button>
            {/* <button>Add a New Group</button> */}
          </div>
          <div className="blacklist-item">
            <h4>Quinn</h4>
            {/* <Link to="/list-controls"> */}
            <button>delete</button>
            {/* </Link> */}
            <button>add/remove shortcut</button>
            <button className="e-d">enable/disable</button>
          </div>

          <div className="blacklist-item">
            <h4>Sam</h4>
            {/* <Link to="/list-controls"> */}
            <button>delete</button>
            {/* </Link> */}
            <button>add/remove shortcut</button>
            <button className="e-d">enable/disable</button>
          </div>

          <div className="blacklist-item">
            <h4>Dave</h4>
            {/* <Link to="/list-controls"> */}
            <button>delete</button>
            {/* </Link> */}
            <button>add/remove shortcut</button>
            <button className="e-d">enable/disable</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WhiteList;
