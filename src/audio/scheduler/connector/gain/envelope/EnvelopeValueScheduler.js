import { DEFAULT_NOTE_LENGTH } from 'audio/constants';

export default class EnvelopeValueScheduler {

  static setEnvelopeValue(envelopeGainNode, value, startTime) {
    if (value.type === undefined)
      return;

    let calculatedTime = value.timeFrom === "start" ? startTime + value.time : startTime + DEFAULT_NOTE_LENGTH - value.time
    switch (value.type) {
      case "linear":
        envelopeGainNode.gain.linearRampToValueAtTime(value.value, calculatedTime);
        break;

      case "exponential":
        envelopeGainNode.gain.exponentialRampToValueAtTime(value.value, calculatedTime);
        break;

      default:
        break;
    }
  }
}
