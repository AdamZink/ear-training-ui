import { WebAudioEngine } from 'audio';
import { keyFrequencies } from 'audio/definitions';

export default class QuizEngine {

  static initializeDataIfNotExists() {
    if (this.itemPool === undefined) {
      this.itemPool = keyFrequencies;
      this.currentItem = undefined;
    }
  }

  static getNextFrequency() {
    this.initializeDataIfNotExists();

    if (this.itemPool.length > 0) {
      let selectedItemIndex = Math.floor(Math.random() * this.itemPool.length);
      let selectedItem = this.itemPool.splice(selectedItemIndex, 1)[0];

      if (this.currentItem !== undefined) {
        this.itemPool.splice(0, 0, this.currentItem);
      }
      this.currentItem = selectedItem;

      return selectedItem.frequency;
    }
    return null;
  }

  static playRandomNote() {
    let randomFrequency = this.getNextFrequency();
    if (randomFrequency !== null) {
      WebAudioEngine.playKeyboard(randomFrequency);
    }
  }
}
