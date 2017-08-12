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

    let dt = event.dataTransfer;
    let files = dt.files;
    console.log(dt);

		for (var i=0, file; file=files[i]; i++) {
			if (file.type.match(/image.*/)) {
				var reader = new FileReader();

				reader.onload = function(e2) {
					// finished reading file data.
					var img = document.createElement('img');
					img.src= e2.target.result;
					document.body.appendChild(img);
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
  onReceiveImages: PropTypes.func.isRequired
}

export default Stream;
