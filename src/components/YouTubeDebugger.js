// // Code YouTubeDebugger Component Here

// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.

// This component has several state properties. The initial state shape looks like this:

// {
//   errors: [],
//   user: null,
//   settings: {
//     bitrate: 8,
//     video: {
//       resolution: '1080p'
//     }
//   }
// }
// Create a button with the class 'bitrate'. Clicking this button changes 
// the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the 
// settings.video.resolution state property to '720p'.

import React, { Component } from 'react';




export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
        }
    }
  }

  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City'
  //   }
  // });

  setBitrate = () => {
   this.setState({
     settings: {
       ...this.state.settings,
       bitrate: 12
     }
   }) 
  }

  setResolution = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
    }) 
   }

  render() {

    return (
    <div>
      <button className ="bitrate" onClick={this.setBitrate}></button>
      <button className ="resolution" onClick={this.setResolution}></button>
    </div>
    )
  }
}
