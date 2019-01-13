import { NodeConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note) {
    this.currentTime = audioContext.currentTime;

    if (note.params === undefined || note.params.fundamental === undefined) {
      this.params = {
        fundamental: 440
      };
    } else {
      this.params = note.params;
    }

    this.params = note.params;

    let destination = audioContext.destination;

    note.graph.forEach((node) => NodeConnector.connectNode(audioContext, node, destination, this.currentTime, this.params));
  }
}
