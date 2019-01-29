import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DownloadLink extends Component {

  render() {

    return (
      <a href={this.props.url}
        download={this.props.demoName.toLowerCase() + '_web_audio_demo.wav'}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download {this.props.demoName} recording
      </a>
    )
  }
}

DownloadLink.propTypes = {
  demoName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
