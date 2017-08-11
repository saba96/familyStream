import React, { Component } from 'react';

import './App.css';
import Stream from '../containers/Stream';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='stream-container'>
          #IMAGESTREAM
          <Stream />
        </div>
      </div>
    );
  }
}

export default App;
