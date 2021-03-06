import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stream extends Component {
  componentDidMount = () => {
    setInterval(this.getImages, 1000);
  }

  getImages = async () => {
    let images = await new Promise((resolve, reject) => {
      fetch('/images', {
        method: 'GET', 
        headers: {
          Accept: 'application/json'
        }
      }).then((response) => {
        let parsedResponse = response.json();
        parsedResponse.then((data) => {
          resolve(data);
        });
      });
    });

    this.props.onGetReqResponse(images);
  }

  dragover_handler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  drop_handler = (event) => {
    event.stopPropagation();
    event.preventDefault();

    let files = event.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.match(/image.*/)) {
        let reader = new FileReader();
        let image;

        reader.onload = (e2) => {
          image = e2.target.result;
          this.props.onReceiveImage(image);
        }

        reader.readAsDataURL(files[i]); // start reading the file data.
      }
    }
  }

  render() {
    return (
      <div
        id='stream'
        onDrop={this.drop_handler}
        onDragOver={this.dragover_handler}
        onDragEnd={this.dragend_handler}
      >
        {this.props.images.map((imageData, idx) => <img key={idx} alt='' className='stream-image' src={imageData}></img>)}
      </div>
    );
  }
}

Stream.propTypes = {
  images: PropTypes.array.isRequired,
  onReceiveImage: PropTypes.func.isRequired,
  onGetReqResponse: PropTypes.func.isRequired
}

export default Stream;
