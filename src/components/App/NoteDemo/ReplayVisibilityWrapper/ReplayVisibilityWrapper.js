import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReplayWidget from './ReplayWidget';
import DownloadLink from './DownloadLink';

export default class ReplayVisibilityWrapper extends Component {

  render() {
    if (this.props.isVisible) {
      return (
        <div className="ReplayVisibilityWrapper">
          <ReplayWidget url={this.props.url} />
          <DownloadLink
            demoName={this.props.demoName}
            url={this.props.url}
          />
        </div>
      );
    }
    return null;
  }
}

ReplayVisibilityWrapper.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  demoName: PropTypes.string.isRequired,
  url: PropTypes.string
};
