import { NodeConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note, inputParamValues) {
    this.currentTime = audioContext.currentTime;

    let noteParamValues = this.getNoteParamValues(note.params, inputParamValues);
    console.log(noteParamValues);

    let destination = audioContext.destination;

    note.graph.forEach((node) => NodeConnector.connectNode(audioContext, node, destination, this.currentTime, noteParamValues));
  }

  static getNoteParamValues(noteParams, inputParamValues) {
    let noteParamValues = {};

    let fundamentalValue = this.getFundamentalParamValue(noteParams, inputParamValues);
    if (fundamentalValue !== null) {
      noteParamValues.fundamental = fundamentalValue;
    }

    return noteParamValues;
  }

  static getFundamentalParamValue(noteParams, inputParamValues) {
    let fundamentalParams = noteParams.filter(param => param.name === 'fundamental');

    if (fundamentalParams.length === 1) {
      if (inputParamValues.fundamental === undefined) {
        // use default fundamental value in note params definition
        return fundamentalParams[0].default;
      } else {
        // use input fundamental value to override default
        return inputParamValues.fundamental;
      }
    } else {
      // fundamental param not in note params definition
      return null;
    }
  }
}
