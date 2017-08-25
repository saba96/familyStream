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
            <body>
              <h1>Stream</h1>
              <nav id="navigation">
                <button className="action-button animate blue" onClick={this.props.imageStreaming}>Image Streaming</button>
                <button className="action-button animate red" onClick={this.props.videoStreaming}>Video Streaming</button>
              </nav>
            </body>
          </div>
        );
      case('ImageStream'):
        return (
          <div className='App'>
            <body>
              <h1>Family Image Stream</h1>
              <ImageStream /> 
            </body>
          </div>
        );
      case('VideoStream'):
        return (
          <div className='App'>
            <body>
              <h1>Family Video Stream</h1>
              <WebRTC /> 
            </body>
          </div>
        );
      default:
        return (
            <div className='App'>
              <body>
                <h1>SOMETHING WENTS WRONG SORRY FOR INCOVINIENCE!</h1>
              </body>
            </div>
          );
        
    }
  }
}

export default App;
