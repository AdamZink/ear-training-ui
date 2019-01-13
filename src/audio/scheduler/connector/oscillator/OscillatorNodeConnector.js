import { DEFAULT_NOTE_LENGTH } from 'audio/constants';

const OSCILLATOR_NODE_TYPES = ["sine", "square", "sawtooth", "triangle"];

class OscillatorNodeConnector {

  static connectOscillatorNode(audioContext, properties, destination, startTime, params) {
    if (properties.type === undefined || properties.multiple === undefined)
      return destination;

    if (!OSCILLATOR_NODE_TYPES.includes(properties.type)) {
      console.log("Oscillator type '" + properties.type + "' not found");
      return destination;
    }

    let sineOscillatorNode = audioContext.createOscillator();
    sineOscillatorNode.type = properties.type;
    sineOscillatorNode.frequency.value = params.fundamental * properties.multiple;
    sineOscillatorNode.connect(destination);

    sineOscillatorNode.start(startTime);
    sineOscillatorNode.stop(startTime + DEFAULT_NOTE_LENGTH);

    return sineOscillatorNode;
  }
}

export default OscillatorNodeConnector;