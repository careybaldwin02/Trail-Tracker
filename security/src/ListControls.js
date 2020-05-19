import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import listcontrols from './img/listcontrols.jpg';

const ListControls = () => {
    return (
        <div className="container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className="list-controls">
                {/* <div className="outer">
                    <table>
                        <tr>
                            <td>cell 1</td>
                            <td>cell 2</td>
                            <td>cell 3</td>
                        </tr>
                        <tr>
                            <td>cell 1</td>
                            <td>cell 2</td>
                            <td>cell 3</td>
                        </tr>
                        <tr>
                            <td>cell 1</td>
                            <td>cell 2</td>
                            <td>cell 3</td>
                        </tr>
                    </table>
                </div> */}

                <img src={listcontrols} />
            </div>
        </div>
    )
};

export default ListControls;