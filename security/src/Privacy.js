import React from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import privacy from './docs/privacy.pdf';

const Privacy = () => {
  return (
    <div className="container">
      <div>
        <SideBar />
        <Header />
      </div>
      <br />
      <div className="docs">
        <iframe src={privacy} width="820" height="1800"></iframe>
      </div>
    </div>
  )
};

export default Privacy;
