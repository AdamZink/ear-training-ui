import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayRecordButton.css';

export default class PlayRecordButton extends Component {

  handleClick() {
    this.props.recordFunc(this.props.setReplayCallback);
  }

  render() {
    return (
      <div className="PlayRecordButton">
        <button onClick={() => this.handleClick()}>Play and record</button>
      </div>
    );
  }
}

PlayRecordButton.propTypes = {
  recordFunc: PropTypes.func.isRequired,
  setReplayCallback: PropTypes.func.isRequired
};
