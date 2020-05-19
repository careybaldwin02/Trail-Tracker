import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';
import Header from './Header';

import './App.css'


class MainPage extends Component {


render() {
    return(
        <div className = "container">
        
            <SideBar />
            <Header />

            <div className = "main">

            <div className = "video-container">
            <div><p>Application Summary</p> </div>
            <div className = "summary">
                <Link to = "video-summary">
                <i class="far fa-play-circle"></i>
                </Link>
            </div>
            <div className = "summary">
                <Link to = "summary-docs">
                <i class="far fa-file-alt"></i>
                </Link>
            </div>
            </div>

            <h2>Search Options</h2>
            <Link to = "/recent">
            <button>View Recent Searches</button>
            </Link>
            <Link to = "/person-demo">
            <button>Search by Person</button>
            </Link>
            <Link to = "/location-demo">
            <button>Search by Location</button>
            </Link>

            {/* <div className = "dev-notes">
                <p>
                (Developer Notes: Clicking on a search button or search fields will automatically
                populate the corresponding field with a preprogrammed entry. Clicking on a search
                button at that point will open the search results page. In the toolbar, the circled “P”
                icon indicates that the app is actively conducting background scanning for nearby
                phones, though this is not a feature with which the user can interface.)
                </p>
            </div> */}

                </div>
            </div>

    )
}

}

export default MainPage;