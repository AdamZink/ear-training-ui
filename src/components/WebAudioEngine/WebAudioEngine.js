import React, { Component } from 'react';
import NoteScheduler from 'components/NoteScheduler';
import sineTestNote from 'audio/notes';

const AUDIO_CONTEXT = 'audioContext';

class WebAudioEngine extends Component {

  componentWillUnmount() {
    if (this.hasOwnProperty(AUDIO_CONTEXT)) {
      this.audioContext.close();
    }
  }

  verifyElseCreateAudioContext() {
    if (!this.hasOwnProperty(AUDIO_CONTEXT)) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  callScheduleNote() {
    this.verifyElseCreateAudioContext();
    this.refs.NoteScheduler.scheduleNote(this.audioContext, sineTestNote);
  }

  render() {
    return (
      <NoteScheduler ref="NoteScheduler" />
    );
  }
}

export default WebAudioEngine;
