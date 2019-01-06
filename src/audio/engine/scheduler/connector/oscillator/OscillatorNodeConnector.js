import { DEFAULT_NOTE_LENGTH } from 'audio/engine/constants';

class OscillatorNodeConnector {

  static connectOscillatorNode(audioContext, properties, destination, startTime, params) {
    if (properties.type === undefined || properties.multiple === undefined)
      return destination;

    switch (properties.type) {
      case "sine":
        let sineOscillatorNode = audioContext.createOscillator();
        sineOscillatorNode.type = "sine";
        sineOscillatorNode.frequency.value = params.fundamental * properties.multiple;
        sineOscillatorNode.connect(destination);

        sineOscillatorNode.start(startTime);
        sineOscillatorNode.stop(startTime + DEFAULT_NOTE_LENGTH);

        return sineOscillatorNode;

      default:
        console.log("Oscillator type not found");
    }
  }
}

export default OscillatorNodeConnector;