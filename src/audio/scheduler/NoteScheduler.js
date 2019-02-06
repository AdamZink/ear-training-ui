import { MasterConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note, inputParamValues) {
    this.currentTime = audioContext.currentTime;

    let noteParamValues = this.getNoteParamValues(note.params, inputParamValues);

    let destinations = [];
    destinations.push(audioContext.destination);  // speakers

    MasterConnector.connectMaster(audioContext, note.graph, destinations, this.currentTime, noteParamValues);
  }

  static getNoteParamValues(noteParams, inputParamValues) {
    let noteParamValues = {};

    // add master gain strength to every note
    noteParamValues['strength'] = this.getParamValue({ 'name': 'strength', 'default': 0.5 }, inputParamValues);

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
