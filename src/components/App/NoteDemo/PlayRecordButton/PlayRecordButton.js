import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayRecordButton.css';

export default class PlayRecordButton extends Component {

  render() {
    return (
      <div className="PlayRecordButton">
        <button onClick={this.props.recordFunc}>Play and record</button>
      </div>
    );
  }
}

PlayRecordButton.propTypes = {
  recordFunc: PropTypes.func.isRequired
};
