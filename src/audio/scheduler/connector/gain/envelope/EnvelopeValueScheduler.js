export default class EnvelopeValueScheduler {

  static setEnvelopeValue(envelopeGainNode, value, startTime, params) {
    if (value.type === undefined)
      return;

    let calculatedTime = value.timeFrom === "start" ? startTime + value.time : startTime + params.duration - value.time
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
