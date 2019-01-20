import { GainNodeConnector } from './gain';
import { OscillatorNodeConnector } from './oscillator';

export default class NodeConnector {

  static connectNode(audioContext, node, destination, startTime, params) {
    switch (node.type) {
      case "gain":
        let gainNode = GainNodeConnector.connectGainNode(audioContext, node.properties, destination, startTime, params);
        this.connectSources(audioContext, node.connections, gainNode, startTime, params);
        break;

      case "oscillator":
        let oscillatorNode = OscillatorNodeConnector.connectOscillatorNode(audioContext, node.properties, destination, startTime, params);
        this.connectSources(audioContext, node.connections, oscillatorNode, startTime, params);
        break;

      default:
        console.log("Node type not found");
    }
  }

  static connectSources(audioContext, connections, destination, startTime, params) {
    if (connections !== undefined) {
      connections.forEach((source) => this.connectNode(audioContext, source, destination, startTime, params));
    }
  }
}
