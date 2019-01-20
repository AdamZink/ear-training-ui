import { EnvelopeValueScheduler } from './envelope';

export default class GainNodeConnector {

  static connectGainNode(audioContext, properties, destination, startTime, params) {
    if (properties.value !== undefined) {
      let constantGainNode = audioContext.createGain();
      constantGainNode.gain.setValueAtTime(properties.value, startTime);
      constantGainNode.connect(destination);
      return constantGainNode;
    }
    else if (properties.values !== undefined) {
      var envelopeGainNode = audioContext.createGain();
      envelopeGainNode.gain.setValueAtTime(0.00001, startTime);
      properties.values.forEach((value) => EnvelopeValueScheduler.setEnvelopeValue(envelopeGainNode, value, startTime, params));
      envelopeGainNode.gain.exponentialRampToValueAtTime(0.00001, startTime + params.duration);
      envelopeGainNode.connect(destination);
      return envelopeGainNode;
    }
  }
}
