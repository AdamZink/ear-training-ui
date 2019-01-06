import NoteScheduler from './NoteScheduler';
import sineTestNote from 'audio/notes';

const AUDIO_CONTEXT = 'audioContext';

class WebAudioEngine {

  static verifyElseCreateAudioContext() {
    if (!this.hasOwnProperty(AUDIO_CONTEXT)) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static callScheduleNote() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, sineTestNote);
  }
}

export default WebAudioEngine;
