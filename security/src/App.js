import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import LoginPage from './LoginPage.js';
// import InfectionControl from './InfectionControl.js';
import MainPage from './MainPage.js';
import Favorites from './Favorites.js';
import RecentSearches from './RecentSearches';
import About from './About.js';
import Privacy from './Privacy.js';
import UserInfo from './UserInfo.js';
import Settings from './Settings';
import MainDemoLocation from './MainDemoLocation';
import MainDemoPerson from './MainDemoPerson';
import ControlPanel from './ControlPanel';
import MapControls from './MapControls.js';
import PerpDemo from './PerpDemo.js';
import SavedSearches from './SavedSearches';
import BlackList from './BlackList';
import WhiteList from './WhiteList';
import LocationChart from './LocationChart';
import PersonChart from './PersonChart';
import ChartControls from './ChartControls';
import BlackListDemo from './BlackListDemo';
import ListControls from './ListControls';
import DevTeam from './DevTeam';
import SummaryDocs from './SummaryDocs';
import Executive from './Executive';
import FullSummary from './FullSummary';
import Prospectus from './Prospectus';
import VideoSummary from './VideoSummary';
import PerpProfile from './PerpProfile';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path = "/" render = {props =>
        (< LoginPage {...props}
        />)}
        />

        <Route path = "/main" render={props =>
        (<MainPage {...props}
        />
        )}
        />

        {/* <Route path = "/ic" render={props =>
        (<InfectionControl {...props}
        />
        )}
        /> */}

        <Route path = "/favorites" render={props =>
        (<Favorites {...props}
        />
        )}
        />

        <Route path = "/recent" render={props =>
        (<RecentSearches {...props}
        />
        )}
        />

        <Route path = "/blacklist" render={props =>
        (<BlackList {...props}
        />
        )}
        />

        <Route path = "/whitelist" render={props =>
        (<WhiteList {...props}
        />
        )}
        />

        <Route path = "/saved" render={props =>
        (<SavedSearches {...props}
        />
        )}
        />

        <Route path = "/about" render={props =>
        (<About {...props}
        />
        )}
        />

        <Route path = "/privacy" render={props =>
        (<Privacy{...props}
        />
        )}
        />

        <Route path = "/development-team" render={props =>
        (<DevTeam{...props}
        />
        )}
        />

        <Route path = "/user" render={props =>
        (<UserInfo{...props}
        />
        )}
        />

        <Route path = "/settings" render={props =>
        (<Settings{...props}
        />
        )}
        />

        <Route path = "/control-panel" render={props =>
        (<ControlPanel{...props}
        />
        )}
        />

        <Route path = "/map-controls" render={props =>
        (<MapControls{...props}
        />
        )}
        />

        <Route path = "/list-controls" render={props =>
        (<ListControls{...props}
        />
        )}
        />

        <Route path = "/location-demo" render={props =>
        (<MainDemoLocation{...props}
        />
        )}
        />

        <Route path = "/person-demo" render={props =>
        (<MainDemoPerson{...props}
        />
        )}
        />

        <Route path = "/location-chart" render={props =>
        (<LocationChart{...props}
        />
        )}
        />

        <Route path = "/chart-controls" render={props =>
        (<ChartControls{...props}
        />
        )}
        />

        <Route path = "/person-chart" render={props =>
        (<PersonChart{...props}
        />
        )}
        />


        <Route path = "/perp-demo" render={props =>
        (<PerpDemo{...props}
        />
        )}
        />

        <Route path = "/blacklist-demo" render={props =>
        (<BlackListDemo{...props}
        />
        )}
        />

        <Route path = "/summary-docs" render={props =>
        (<SummaryDocs{...props}
        />
        )}
        />

        <Route path = "/executive" render={props =>
        (<Executive{...props}
        />
        )}
        />

        <Route path = "/full-summary" render={props =>
        (<FullSummary{...props}
        />
        )}
        />

        <Route path = "/prospectus" render={props =>
        (<Prospectus{...props}
        />
        )}
        />

        <Route path = "/video-summary" render={props =>
        (<VideoSummary{...props}
        />
        )}
        />

        <Route path = "/blacklist-profile" render={props =>
        (<PerpProfile{...props}
        />
        )}
        />

      </div>
    );
  }
}

export default App;
