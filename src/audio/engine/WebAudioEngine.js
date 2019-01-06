import NoteScheduler from './NoteScheduler';
import sineTestNote from 'audio/notes';

const AUDIO_CONTEXT = 'audioContext';
export const DEFAULT_NOTE_LENGTH = 0.5;

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
