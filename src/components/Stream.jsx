import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dragover_handler = (event) => {
  event.preventDefault();
  console.log('DRAGOVER EVENT', event);
}

const drop_handler = (event) => {
  event.preventDefault();
  console.log('RECEIVED IMAGE EVENT', event);

  var dt = event.dataTransfer;
  if (dt.items) {
    for (var i=0; i < dt.items.length; i++) {
      if (dt.items[i].kind === "file") {
        var f = dt.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + f.name);
      }
    }
  } else {
    for (var j=0; j < dt.files.length; j++) {
      console.log("... file[" + i + "].name = " + dt.files[j].name);
    }
  }
}

const dragend_handler = (event) => {
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

class Stream extends Component {
  render() {
    return (
      <div
        id='stream'
        onDrop={drop_handler}
        onDragOver={dragover_handler}
        onDragEnd={dragend_handler}
      >
        IMAGE STREAM HERE
      </div>
    );
  }
}

Stream.propTypes = {
  images: PropTypes.array.isRequired,
  //receivedImages: PropTypes.func.isRequired
}

export default Stream;
