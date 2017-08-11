import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dragover_handler = (event) => {
  console.log('DRAGOVER EVENT', event);
}

const receivedImage = (event) => {
  console.log('RECEIVED IMAGE EVENT', event);
}

class Stream extends Component {
  render() {
    return (
      <div id='stream' onDrop={receivedImage} onDragOver={dragover_handler}>
        IMAGE STREAM HERE
      </div>
    );
  }
}

Stream.propTypes = {
  images: PropTypes.array.isRequired,
  //receivedImage: PropTypes.func.isRequired
}

export default Stream;
