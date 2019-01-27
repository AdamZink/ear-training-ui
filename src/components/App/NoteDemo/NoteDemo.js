import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoteDemoTitle from './NoteDemoTitle';
import PlayRecordButton from './PlayRecordButton';
import ReplayVisibilityWrapper from './ReplayVisibilityWrapper';

export default class NoteDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setReplayUrl(replayUrl) {
    this.setState({
      url: replayUrl
    });
  }

  render() {
    let replayIsVisible = this.state.url !== undefined ? true : false;

    return (
      <div className="NoteDemo">
        <NoteDemoTitle title={this.props.title} />
        <PlayRecordButton
          recordFunc={this.props.recordFunc}
          setReplayCallback={(url) => this.setReplayUrl(url)}
        />
        <ReplayVisibilityWrapper
          isVisible={replayIsVisible}
          demoName={this.props.title}
          url={this.state.url}
        />
      </div>
    );
  }
}

NoteDemo.propTypes = {
  title: PropTypes.string.isRequired,
  recordFunc: PropTypes.func.isRequired
};
