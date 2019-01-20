import NoteScheduler from './scheduler/NoteScheduler';
import {
  sineTestNote,
  squareTestNote,
  sawtoothTestNote,
  triangleTestNote
} from 'audio/notes';
import { AUDIO_CONTEXT } from './constants';

const FREQUENCY = 500;
const DURATION = 0.5;

export default class WebAudioEngine {

  static verifyElseCreateAudioContext() {
    if (!this.hasOwnProperty(AUDIO_CONTEXT)) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static playSine() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, sineTestNote, { 'fundamental': FREQUENCY, 'duration': DURATION });
  }

  static playSquare() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, squareTestNote, { 'fundamental': FREQUENCY, 'duration': DURATION });
  }

  static playSawtooth() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, sawtoothTestNote, { 'fundamental': FREQUENCY, 'duration': DURATION });
  }

  static playTriangle() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, triangleTestNote, { 'fundamental': FREQUENCY, 'duration': DURATION });
  }
}
