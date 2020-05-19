import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

import "./App.css";

class SavedSearches extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <SideBar />
          <Header />
        </div>
        <div className="recent-container">
          <h1>Saved Searches</h1>
          <div className="recent">
            <div className="recent-item">
              <Link to={"/perp-demo"}>
                <button>
                  <b>view</b>
                </button>
              </Link>
              <h3>Chuck Santiago, 406 E. Jefferson St. Ann Arbor MI 48104</h3>
            </div>
            <div className="recent-item">
              <button>view</button>
              <h3>06117</h3>
            </div>
            <div className="recent-item">
              <button>view</button>
              <h3>West Hartford, CT</h3>
            </div>
            <div className="recent-item">
              <button>view</button>
              <h3>Massachusetts</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedSearches;
