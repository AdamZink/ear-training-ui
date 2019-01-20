import NoteScheduler from './scheduler/NoteScheduler';
import { sineTestNote } from 'audio/notes';
import { AUDIO_CONTEXT } from './constants';

const FREQUENCY = 500;
const DURATION = 0.5;

export default class WebAudioEngine {

  static verifyElseCreateAudioContext() {
    if (!this.hasOwnProperty(AUDIO_CONTEXT)) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static callScheduleNote() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, sineTestNote, { 'fundamental': FREQUENCY, 'duration': DURATION });
  }
}
