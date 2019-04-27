import NoteScheduler from './scheduler/NoteScheduler';
import { keyboardNote } from 'audio/notes';
import { AUDIO_CONTEXT } from './constants';

export default class WebAudioEngine {

  static verifyElseCreateAudioContext() {
    if (!WebAudioEngine.hasOwnProperty(AUDIO_CONTEXT)) {
      WebAudioEngine.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static playKeyboard(fundamental) {
    WebAudioEngine.verifyElseCreateAudioContext();
    NoteScheduler.scheduleNote(
      WebAudioEngine.audioContext,
      keyboardNote,
      { 'fundamental': fundamental, 'duration': 2.5, 'strength': 0.5 }
    );
  }

  static getCurrentTime() {
    WebAudioEngine.verifyElseCreateAudioContext();
    return WebAudioEngine.audioContext.currentTime;
  }
}
