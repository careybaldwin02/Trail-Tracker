import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from './Dropdown';
import Modal from './Modal';
import searchcontrols from './img/searchcontrols.jpg'
import './App.css';

class ChartControlBar extends Component {
  constructor() {
    super()
    this.state = {
      isHidden: true,
      visual: [

        {
          id: 0,
          title: 'Map',
          selected: false,
          key: 'visual'
        },
        {
          id: 1,
          title: 'Street View',
          selected: false,
          key: 'visual'
        },
        {
          id: 2,
          title: 'Planet\'s Satellite Video',
          selected: false,
          key: 'visual'
        },
        {
          id: 3,
          title: 'Global Hawk Video',
          selected: false,
          key: 'visual'
        },
        {
          id: 4,
          title: 'Swarm Drones Video',
          selected: false,
          key: 'visual'
        },
        {
          id: 5,
          title: 'CCTV Cameras',
          selected: false,
          key: 'visual'
        }
      ],

      filter: [
        {
          id: 0,
          title: 'Show All',
          selected: false,
          key: 'filter'
        },
        {
          id: 1,
          title: 'Show Watchlist',
          selected: false,
          key: 'filter'
        },
        {
          id: 2,
          title: 'Show Whitelist',
          selected: false,
          key: 'filter'
        },
        {
          id: 3,
          title: 'Change Time Frame',
          selected: false,
          key: 'filter'
        },
        {
          id: 4,
          title: 'Frequent Visitors',
          selected: false,
          key: 'filter'
        },
        {
          id: 5,
          title: 'Average Velocity',
          selected: false,
          key: 'filter'
        }
      ]
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="chart-control-bar">
        <div className="chart-control-buttons">
          <div className="chart-controls">
          <div onClick={this.toggleHidden.bind(this)}>
            <div>
              <i className="fas fa-sliders"></i>
            </div>
          </div>
          {!this.state.isHidden &&
            <Modal>
              <i onClick={this.toggleHidden.bind(this)} className="fas fa-times"></i>
              <img src={searchcontrols} />
            </Modal>}
          </div>
          <div className="dropdown">
            <Dropdown
              title="Filter"
              list={this.state.filter}
            />
          </div>
        </div>
        <div className="switch-view">
          <Link to={'/location-demo'}>
            <h4>
              Toggle Map/Chart View
          </h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default ChartControlBar;