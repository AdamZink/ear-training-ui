import React, { Component } from 'react';
import NoteScheduler from 'components/NoteScheduler';
import testSineNote from 'notes';

class WebAudioEngine extends Component {

  componentWillMount() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  componentWillUnmount() {
    this.audioContext.close();
  }

  callScheduleNote() {
    this.refs.NoteScheduler.scheduleNote(testSineNote);
  }

  render() {
    return (
      <NoteScheduler ref="NoteScheduler" audioContext={this.audioContext} />
    );
  }
}

export default WebAudioEngine;
