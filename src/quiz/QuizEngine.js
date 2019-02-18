import { WebAudioEngine } from 'audio';
import { keyFrequencies } from 'audio/definitions';

export default class QuizEngine {

  // TODO record the audio context time that the last question was asked
  // whenever user answers (regardless of right or wrong), record that time too
  // take the difference, wait the difference, and then play the next frequency

  // the idea is to let the user decide the cadence
  // if they are better at answering, they can go faster, and vice versa

  static initializeDataIfNotExists() {
    if (this.itemPool === undefined) {
      this.itemPool = [...keyFrequencies];
      this.currentItem = null;
      this.lastQuestionTime = null;
      this.lastAnswerTime = null;
    }
  }

  static getNextFrequency() {
    this.initializeDataIfNotExists();

    if (this.itemPool.length > 0) {
      let selectedItemIndex = Math.floor(Math.random() * this.itemPool.length);
      let selectedItem = this.itemPool.splice(selectedItemIndex, 1)[0];

      if (this.currentItem !== null) {
        this.itemPool.splice(0, 0, this.currentItem);
      }
      this.currentItem = selectedItem;

      return selectedItem.frequency;
    }
    return null;
  }

  static start() {
    this.initializeDataIfNotExists();
    this.lastQuestionTime = WebAudioEngine.getCurrentTime();
    this.ask();
  }

  static ask() {
    let randomFrequency = this.getNextFrequency();
    if (randomFrequency !== null) {
      WebAudioEngine.playKeyboard(randomFrequency);
    }
    this.lastQuestionTime = WebAudioEngine.getCurrentTime();
  }

  static answer(keyObject, frequency, answerWasCorrect) {
    if (this.currentItem !== null) {
      if (frequency === this.currentItem.frequency) {
        answerWasCorrect(keyObject, true);
      } else {
        answerWasCorrect(keyObject, false);
      };

      this.lastAnswerTime = WebAudioEngine.getCurrentTime();
      console.log(this.lastAnswerTime);

      let nextQuestionDelay = (this.lastAnswerTime - this.lastQuestionTime) * 1000;
      if (nextQuestionDelay > 2000) {
        nextQuestionDelay = 2000;
      }
      setTimeout(
        function() { QuizEngine.ask(); },
        nextQuestionDelay
      );

      this.currentItem = null;
    }
  }
}
