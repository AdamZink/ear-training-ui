import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReplayWidget extends Component {

  render() {
    return (
      <div className="ReplayWidget">
        <audio src={this.props.url} controls></audio>
      </div>
    );
  }
}

ReplayWidget.propTypes = {
  url: PropTypes.string.isRequired
};
