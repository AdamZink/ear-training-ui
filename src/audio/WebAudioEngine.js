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
    if (!WebAudioEngine.hasOwnProperty(AUDIO_CONTEXT)) {
      WebAudioEngine.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static playSine(fundamental) {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      sineTestNote,
      { 'fundamental': fundamental, 'duration': 1, 'strength': 0.25 }
    );
  }

  static recordSine() {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      sineTestNote,
      { 'fundamental': FREQUENCY, 'duration': 1, 'strength': 0.25 }
    );
  }

  static recordSquare() {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      squareTestNote,
      { 'fundamental': FREQUENCY, 'duration': 0.25, 'strength': 0.05 }
    );
  }

  static recordSawtooth() {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      sawtoothTestNote,
      { 'fundamental': FREQUENCY, 'duration': 0.5, 'strength': 0.05 }
    );
  }

  static recordTriangle() {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      triangleTestNote,
      { 'fundamental': FREQUENCY, 'duration': 0.75, 'strength': 0.2 }
    );
  }
}
