import { WebAudioEngine } from 'audio';
import { keyFrequencies } from 'audio/definitions';

export default class QuizEngine {

  static initializeDataIfNotExists() {
    if (this.itemPool === undefined) {
      this.itemPool = [...keyFrequencies];
      this.currentItem = null;
      this.lastQuestionTime = null;
      this.lastAnswerTime = null;
      this.unaskedQuestion = false;
      this.unansweredQuestion = false;
    }
  }

  static hasUnaskedQuestion() {
    return this.unaskedQuestion;
  }

  static setNextItem() {
    this.initializeDataIfNotExists();

    if (this.itemPool.length > 0) {
      let selectedItemIndex = Math.floor(Math.random() * this.itemPool.length);
      let selectedItem = this.itemPool.splice(selectedItemIndex, 1)[0];

      if (this.currentItem !== null) {
        this.itemPool.splice(0, 0, this.currentItem);
      }
      this.currentItem = selectedItem;
    }
  }

  static start() {
    this.initializeDataIfNotExists();
    this.lastQuestionTime = WebAudioEngine.getCurrentTime();
    this.ask();
  }

  static ask() {
    if (this.unansweredQuestion === false) {
      this.setNextItem();
      this.unansweredQuestion = true;
    }
    WebAudioEngine.playKeyboard(this.currentItem.frequency);
    this.lastQuestionTime = WebAudioEngine.getCurrentTime();
  }

  static answer(keyObject, frequency, answerWasCorrect) {
    if (this.currentItem !== null) {
      this.lastAnswerTime = WebAudioEngine.getCurrentTime();

      let nextQuestionDelay = (this.lastAnswerTime - this.lastQuestionTime) * 1000;
      if (nextQuestionDelay > 2000) {
        nextQuestionDelay = 2000;
      }

      if (frequency === this.currentItem.frequency) {
        answerWasCorrect(keyObject, true);
        this.unansweredQuestion = false;
      } else {
        answerWasCorrect(keyObject, false);
      };

      this.unaskedQuestion = true;

      setTimeout(
        function() {
          QuizEngine.ask();
          QuizEngine.unaskedQuestion = false;
        },
        nextQuestionDelay
      );
    }
  }
}
