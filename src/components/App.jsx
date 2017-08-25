import React, { Component } from 'react';

import './App.css';
import ImageStream from './ImageStream';
import WebRTC from './WebRTC'


class App extends Component {
  render() {
    console.log(this.props)
    switch (this.props.view) {
      case ('Home'):
        return (
          <div className='App'>
            <h1>Family Stream</h1>
            <nav id="navigation">
              <button className="action-button animate blue" onClick={this.props.imageStreaming}>Image Streaming</button>
              <button className="action-button animate red" onClick={this.props.videoStreaming}>Video Streaming</button>
            </nav>
          </div>
        );
      case('ImageStream'):
        return (
          <ImageStream /> 
        );
      case('VideoStream'):
        return (
          <WebRTC /> 
        );
      default:
        return (
            <div className='App'>
              <h1>SOMETHING WENTS WRONG SORRY FOR INCOVINIENCE!</h1>
            </div>
          );
        
    }
  }
}

export default App;
