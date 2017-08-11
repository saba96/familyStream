import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stream extends Component {
  render() {
    return (
      <div>
        IMAGE STREAM HERE
      </div>
    );
  }
}

Stream.propTypes = {
  images: PropTypes.array.isRequired
}

export default Stream;
