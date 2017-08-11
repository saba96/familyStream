import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Stream extends Component {
  dragover_handler = (event) => {
    event.preventDefault();
    console.log('DRAGOVER EVENT', event);
  }

  drop_handler = (event) => {
    event.preventDefault();
    console.log('RECEIVED IMAGE EVENT', event);

    let dt = event.dataTransfer;
    let files = [];

    // If using the new implementation
    if (dt.items) {
      for (let i=0; i < dt.items.length; i++) {
        if (dt.items[i].kind === "file") {
          files.push(dt.items[i].getAsFile());
        }
      }
    } else { // In case of old implementation
      for (let i=0; i < dt.files.length; i++) {
        console.log("... file[" + i + "].name = " + dt.files[i].name);
      }
    }

    console.log(this.props);
    this.props.onReceiveImages(files);
  }

  dragend_handler = (event) => {
    console.log('DRAGEND EVENT');
    // Remove all of the drag data
    var dt = event.dataTransfer;
    if (dt.items) {
      // Use DataTransferItemList interface to remove the drag data
      for (var i = 0; i < dt.items.length; i++) {
        dt.items.remove(i);
      }
    } else {
      // Use DataTransfer interface to remove the drag data
      event.dataTransfer.clearData();
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
  onReceiveImages: PropTypes.func.isRequired
}

export default Stream;
