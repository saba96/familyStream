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
    webrtc.joinRoom('your awesome room name');
  });
  }
  render() {
    return (
      <div className='WebRTC'>
        <h4>Getting started</h4>
        <ol>
          <li>Type a channel name and click <strong>create</strong></li>
          <li>Open this page in another tab</li>
          <li>Type the same channel name in another tab page and click <strong>join</strong></li>
          <li>Wait several seconds and start chatting!</li>
        </ol>
    
        <div>
          <input type="text" placeholder="Channel name" />
          <button >Create</button>
          <button >Join</button>
        </div>
        <video height="300" id="localVideo"></video>
        <div id="remotesVideos"></div>
      </div>
    );
  }
}

export default WebRTC;
