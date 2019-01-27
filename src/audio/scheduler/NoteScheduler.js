import { MasterConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note, inputParamValues, setReplayCallback) {
    this.currentTime = audioContext.currentTime;

    let noteParamValues = this.getNoteParamValues(note.params, inputParamValues);

    let destinations = [];
    destinations.push(audioContext.destination);  // speakers

    let mediaStreamDestination = audioContext.createMediaStreamDestination();
    destinations.push(mediaStreamDestination);  // recording

    var chunks = [];

    var mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);

    mediaRecorder.ondataavailable = function(evt) {
      chunks.push(evt.data);
    }

    mediaRecorder.onstop = function(evt) {
      // Make blob out of our blobs, and open it.
      // Media types: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats
      var blob = new Blob(chunks, { 'type': 'audio/wav; codecs=PCM' });
      let recordingUrl = URL.createObjectURL(blob);

      setReplayCallback(recordingUrl);
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const stopRecordingAfterOneSecond = async () => {
      await delay(1000);  // TODO get end value from inputParamValues duration?
      mediaRecorder.stop();
    }

    mediaRecorder.start();
    stopRecordingAfterOneSecond();

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
