/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

import './App.css';

import SideBar from './SideBar.js';
import Header from './Header.js';

class DevTeam extends Component {
    render() {
        return (

            <div className="container">

                <SideBar />
                <Header />

                <div className="dev-team">

                    <div className="greenline-info">
                        <h1>GREENLINE ANALYTICS</h1>
                        <h3 className="dev-bio">Data Analytics and Software Development</h3>
                        <a href={"https://greenlineanalytics.com/"} target="_blank"><p>http://greenlineanalytics.com</p></a>
                        <p>contact: cbaldwin@greenlineanalytics.com</p>
                    </div>
                    <div className="dev-team-info">
                        <h1>OUR TEAM</h1>
                        <h2>CAREY BALDWIN</h2>
                        <p>Chief Executive Officer</p>
                        <p>Data Analyst, Software Developer</p>
                        {/* <a href={"http://www.greenlineanalytics.com/about"} target="_blank"><p> [Read Bio]</p></a> */}

                        <br />

                        <h2>JOHN H. MALONE</h2>
                        <p>Chief Legal Advisor</p>
                        <p>Board Certified Criminal Trial Attorney</p>
                        {/* <a href={"https://greenlineanalytics.com/partners/"} target="_blank"><p>[Read Bio]</p></a> */}

                        <a href={"https://ccjeca.org/employee-awards/"} target="_blank"><b>2016 Connecticut Prosecutor of the Year</b></a>

                        <a href={"http://www.bristolpress.com/BP-General+News/305043/john-malone-lawyer-for-40-years-retires"} target="_blank"><h3><b>Career Retrospective</b></h3></a>

                        <p>Malone’s methodical approach to trying cases has served the state
                        well over the years, said Chief’s State’s Attorney Kevin Kane,
                        the only member of the division who has served longer. “John’s
                        steady, reliable, dedicated, and hardworking,” Kane said. “He’s a
                        role model for other prosecutors. He’s thorough in case
                        preparation and analysis. He’s always willing to take on hard
                        cases and do as much work as it takes to do it well.”</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevTeam