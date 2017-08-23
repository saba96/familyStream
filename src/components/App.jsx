import React, { Component } from 'react';

import './App.css';
import Stream from '../containers/Stream';
import WebRTC from './WebRTC'

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <div className='stream-container'>
          <h2>#IMAGESTREAM</h2>
          <Stream />
        </div>
        <div id='background-box'>
          <div className='background-text'>
            drag
          </div>
          <div className='background-text'>
            images
          </div>
          <div className='background-text'>
            here
          </div>
        </div> */}
        <WebRTC />
       
      </div>
    );
  }
}

export default App;
