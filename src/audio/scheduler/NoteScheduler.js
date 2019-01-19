import { NodeConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note, inputParamValues) {
    this.currentTime = audioContext.currentTime;

    let noteParamValues = this.getNoteParamValues(note.params, inputParamValues);

    let destination = audioContext.destination;

    note.graph.forEach((node) => NodeConnector.connectNode(audioContext, node, destination, this.currentTime, noteParamValues));
  }

  static getNoteParamValues(noteParams, inputParamValues) {
    let noteParamValues = {};

    noteParams.forEach((noteParam) => {
      noteParamValues[noteParam.name] = this.getParamValue(noteParam, inputParamValues);
    });
    return noteParamValues;
  }

  static getParamValue(noteParam, inputParamValues) {
    if (inputParamValues[noteParam.name] === undefined) {
      return noteParam.default;
    }
    return inputParamValues[noteParam.name];
  }
}
