import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar.js";
import Header from "./Header.js";
import Modal from "./Modal.js";
import "./App.css";
import "./ic.css";

class InfectionControl extends Component {
  constructor() {
    super();
    this.state = {
      isHidden0: true,
      isHidden1: true,
      isHidden2: true,
      isHidden3: true,
      isHidden4: true,
      isHidden5: true,
      isHidden6: true,
      isHidden6: true,
      isHidden8: true,
      isHidden9: true,
      isHidden10: true,
      isHidden11: true,
      isHidden12: true
    };
  }

  toggleHiddenContact() {
    this.setState({
      isHidden0: !this.state.isHidden0
    });
  }

  toggleHiddenSymptom() {
    this.setState({
      isHidden1: !this.state.isHidden1
    });
  }

  toggleHiddenQuarantine() {
    this.setState({
      isHidden2: !this.state.isHidden2
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <SideBar />
          <Header />
        </div>
        <div className="ic-describe">
          <div className="summary">
            <p>
              Our patented technology relies only on unencrypted beacons that
              are sent from every phone (all types) on a regular basis. We can
              determine the locations of phones and identity of users in order
              to generate a comprehensive database of all historical location
              trails. This is all accomplished{" "}
              <b>without violating any privacy laws </b>. With this data we
              could create geographical visualizations and interface with an
              expansive database of video surveillance recordings to verify
              identity and location.
            </p>
          </div>
          <div className="options">
            <div className="contact">
              {/* Modal for Contact and Location Tracing */}
              <i onClick={this.toggleHiddenContact.bind(this)}>
                <h3>
                  <b>Contact and Location Tracing</b>
                </h3>
              </i>
              {!this.state.isHidden0 && (
                <Modal>
                  <div>
                    <i
                      onClick={this.toggleHiddenContact.bind(this)}
                      className="fas fa-times"
                    ></i>
                    <div className="video-trace">
                      <div className="video-info">
                        <div>
                          <iframe
                            src="https://drive.google.com/file/d/17hdrM6l7M2-nkfF7lTiarYQysa6pI5DH/preview"
                            width="440"
                            height="360"
                          ></iframe>
                        </div>
                        {/* <p>
                          Difference from Apple and Google — proximity based
                          monitoring using anonymized serial numbers — notify
                          people if they came into close proximity to an
                          infected person. This system does not pick up all
                          phones and uses encrypted data violating privacy laws
                          if shared. We have a more comprehensive system,
                          because we can track a person’s historical locations
                          which allows identification of contacts and
                          potentially contaminated surfaces and air.
                        </p> */}
                        <p>
                          Manual contact tracing is resource intensive, costly
                          and inefficient. Relies on memory. Potential to leave
                          out contacts, surfaces, air contamination.
                        </p>
                        <p>
                          We have a more comprehensive system that tracks
                          historical locations allowing identification of
                          contacts and potentially contaminated surfaces and
                          air.
                        </p>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>

            {/* Modal for Symptom Detection */}
            <div className="symptom">
              <i onClick={this.toggleHiddenSymptom.bind(this)}>
                <h3>
                  <b>Symptom Detection</b>
                </h3>
              </i>
              {!this.state.isHidden1 && (
                <Modal>
                  <div>
                    <i
                      onClick={this.toggleHiddenSymptom.bind(this)}
                      className="fas fa-times"
                    ></i>
                    <div className="video-trace">
                      <div className="video-info">
                        <p>
                          <a href="https://www.kinsahealth.co/products/">
                            How do we feel App.
                          </a>
                        </p>
                        <p> Drones reading temperature and detect coughing ,</p>
                        <p>Monitoring social distancing</p>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>

            <div className="quarantine">
              {/* Modal for Quarantine Adherance */}
              <i onClick={this.toggleHiddenQuarantine.bind(this)}>
                <h3>
                  <b>Quarantine Adherance</b>
                </h3>
              </i>
              {!this.state.isHidden2 && (
                <Modal>
                  <div>
                    <i
                      onClick={this.toggleHiddenQuarantine.bind(this)}
                      className="fas fa-times"
                    ></i>
                    <div className="video-trace">
                      <div className="video-info">
                        <p>Adherence to quarantine and social distancing</p>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfectionControl;
