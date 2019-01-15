import { NodeConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note, paramValues) {
    this.currentTime = audioContext.currentTime;

    this.params = {};

    let fundamentalParamDefinition = note.params.filter(param => param.name === 'fundamental');
    if (fundamentalParamDefinition.length === 1) {
      if (paramValues.fundamental === undefined) {
        this.params.fundamental = fundamentalParamDefinition[0].default;
      } else {
        this.params.fundamental = paramValues.fundamental;
      }
    }

    let destination = audioContext.destination;

    note.graph.forEach((node) => NodeConnector.connectNode(audioContext, node, destination, this.currentTime, this.params));
  }
}
