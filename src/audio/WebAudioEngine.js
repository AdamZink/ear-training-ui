import NoteScheduler from './scheduler/NoteScheduler';
import {
  sineTestNote,
  squareTestNote,
  sawtoothTestNote,
  triangleTestNote
} from 'audio/notes';
import { AUDIO_CONTEXT } from './constants';

const FREQUENCY = 500;

export default class WebAudioEngine {

  static verifyElseCreateAudioContext() {
    if (!this.hasOwnProperty(AUDIO_CONTEXT)) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static recordSine() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, sineTestNote, { 'fundamental': FREQUENCY, 'duration': 1 });
  }

  static recordSquare() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, squareTestNote, { 'fundamental': FREQUENCY, 'duration': 0.25 });
  }

  static recordSawtooth() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, sawtoothTestNote, { 'fundamental': FREQUENCY, 'duration': 0.5 });
  }

  static recordTriangle() {
    this.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(this.audioContext, triangleTestNote, { 'fundamental': FREQUENCY, 'duration': 0.75 });
  }
}
