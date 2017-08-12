import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stream extends Component {
  dragover_handler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    console.log('DRAGOVER EVENT', event);
  }

  drop_handler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('RECEIVED IMAGE EVENT', event);

    let files = event.dataTransfer.files;

    for (let i = 0, file; file=files[i]; i++) {
      if (file.type.match(/image.*/)) {
        let reader = new FileReader();
        let image;

        reader.onload = (e2) => {
          image = e2.target.result;
          this.props.onReceiveImage(image);
        }

        reader.readAsDataURL(file); // start reading the file data.
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <div
        id='stream'
        onDrop={this.drop_handler}
        onDragOver={this.dragover_handler}
        onDragEnd={this.dragend_handler}
      >
        IMAGE STREAM HERE
      </div>
    );
  }
}

Stream.propTypes = {
  images: PropTypes.array.isRequired,
  onReceiveImage: PropTypes.func.isRequired
}

export default Stream;
