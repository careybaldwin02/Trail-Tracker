import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import styled from "@emotion/styled";
import Dropdown from './Dropdown';
import mapcontrols from './img/mapcontrols.jpg';
import Modal from './Modal';


class MapControlBarPerson extends Component {
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
        },
        {
          id: 6,
          title: 'Crime Videos (22)',
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
          title: 'Decrease Radius',
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
      <div className="control-bar">
        <div className="map-control-buttons">
        <div onClick={this.toggleHidden.bind(this)}>
            <div>
              <i className="fas fa-sliders"></i>
            </div>
          </div>

          {!this.state.isHidden &&
            <Modal>
              <div>
                <i onClick={this.toggleHidden.bind(this)} className="fas fa-times"></i>
                <div>
                  <img src={mapcontrols} />
                </div>
              </div>
            </Modal>}
          <div className="dropdown">
            <Dropdown
              title="Select Visualization"
              list={this.state.visual}
            />
          </div>
          <div className="dropdown">
            <Dropdown
              title="Filter"
              list={this.state.filter}
            />
          </div>

        </div>
        <div className="switch-view">
          <Link to={'/person-chart'}>
            <h4>
              Toggle Map/Chart View
          </h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default MapControlBarPerson;