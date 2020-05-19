import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import VideoOverview from './VideoOverview';

const VideoSummary = () => {
    return (
        <div className="container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className="docs">
            <h1>Video Introduction and Application Overview</h1>
            <p>Please scroll down to see second video</p>
                <div>
                    <h2>Introduction</h2>
                    <iframe src="https://drive.google.com/file/d/1tw6-4ywS-TZTBgjvF0bQwfDnXCPt8yV0/preview" width="640" height="480"></iframe>
                </div>
                <br/>
                <div>
                    <h2>Application Overview</h2>
                    <iframe src="https://drive.google.com/file/d/1XZDIrZuHS8TWB-QZ5If1tuwjMMyHJkfS/preview" width="640" height="480"></iframe>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
};

export default VideoSummary;