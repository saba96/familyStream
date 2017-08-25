import React, { Component } from 'react';


import Stream from '../containers/Stream';

class ImageStream extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Family Image Stream</h1>
				<div className='stream-container'>
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
				</div>
			</div>
		);
	}
}

export default ImageStream;
