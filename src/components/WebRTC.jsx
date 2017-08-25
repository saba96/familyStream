import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';


class WebRTC extends Component {
  constructor(){
    super();
    var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remotesVideos',
    // immediately ask for camera access
    autoRequestMedia: true
   });
   webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('Saba');
  });
  }
  render() {
    return (
      <div className='WebRTC'>
        <video height="300" id="localVideo"></video>
        <div id="remotesVideos"></div>
      </div>
    );
  }
}

export default WebRTC;
