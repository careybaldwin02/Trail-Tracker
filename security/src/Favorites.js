import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';


class Favorites extends Component {
  render() {
    return (
      <div className="container">

        <div>
          <SideBar />
          <Header />
        </div>
        <div className="favorites-container">
          <div className="favorites">
            <h1>Favorites</h1>
            <Link to={"/blacklist"}>
              <h3 className="bws"><b>Watchlist</b></h3>
            </Link>
            <Link to={"/whitelist"}>
              <h3 className="bws"><b>Whitelist</b></h3>
            </Link>
            <Link to={"/saved"}>
              <h3 className="bws"><b>Saved Searches </b></h3>
            </Link>
          </div>
          <div className="dev-notes">
            {/* <p>
        (Developer Notes: By default this page will automatically display the one of the
        three sub-categories that the subscriber most recently accessed, but the user can
        view an alternative sub-category by clicking on the column title. This page will
        display as a tabular chart. One link next to each entry will allow the user to adjust
        parameter settings for each individual on the blacklist or whitelist. Clicking on one
        of the entries in the chart will open a search results page for that person or location.
        Please see the accompanying document of PerpTrac illustrations for rudimentary
        visualizations of the pages for the blacklist settings and chart.)
        </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;