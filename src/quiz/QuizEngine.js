import { WebAudioEngine } from 'audio';
import { keyFrequencies } from 'audio/definitions';

export default class QuizEngine {

  static playRandomNote() {
    let randomKeyFrequency = keyFrequencies[Math.floor(Math.random() * keyFrequencies.length)];
    WebAudioEngine.playKeyboard(randomKeyFrequency.frequency);
  }
}
