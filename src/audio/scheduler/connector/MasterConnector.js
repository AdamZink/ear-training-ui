import { NodeConnector } from '.';

export default class MasterConnector {

  static connectMaster(audioContext, nodes, destinations, startTime, params) {
    let masterGainNode = audioContext.createGain();
    masterGainNode.gain.value = params.strength;

    destinations.forEach((destination) => masterGainNode.connect(destination));

    nodes.forEach((node) => NodeConnector.connectNode(audioContext, node, masterGainNode, startTime, params));
  }
}
