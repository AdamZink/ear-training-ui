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

  static recordSine(setReplayCallback) {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      sineTestNote,
      { 'fundamental': FREQUENCY, 'duration': 1, 'strength': 0.25 },
      setReplayCallback
    );
  }

  static recordSquare(setReplayCallback) {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      squareTestNote,
      { 'fundamental': FREQUENCY, 'duration': 0.25, 'strength': 0.05 },
      setReplayCallback
    );
  }

  static recordSawtooth(setReplayCallback) {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      sawtoothTestNote,
      { 'fundamental': FREQUENCY, 'duration': 0.5, 'strength': 0.05 },
      setReplayCallback
    );
  }

  static recordTriangle(setReplayCallback) {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      triangleTestNote,
      { 'fundamental': FREQUENCY, 'duration': 0.75, 'strength': 0.2 },
      setReplayCallback
    );
  }
}
