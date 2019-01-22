import { NodeConnector } from './connector';

export default class NoteScheduler {

  static scheduleNote(audioContext, note, inputParamValues) {
    this.currentTime = audioContext.currentTime;

    let noteParamValues = this.getNoteParamValues(note.params, inputParamValues);

    //let destination = audioContext.destination;

    var chunks = [];

    let destination = audioContext.createMediaStreamDestination();

    var mediaRecorder = new MediaRecorder(destination.stream);

    mediaRecorder.ondataavailable = function(evt) {
      chunks.push(evt.data);
    }

    mediaRecorder.onstop = function(evt) {
      // Make blob out of our blobs, and open it.
      // Media types: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats
      var blob = new Blob(chunks, { 'type': 'audio/wav; codecs=PCM' });
      let recordingUrl = URL.createObjectURL(blob);
      document.querySelector("#recording").src = recordingUrl;

      var downloadElement = document.getElementById('downloadAudio');
      downloadElement.href = recordingUrl;
      downloadElement.target = '_blank';
      downloadElement.download = 'web_audio_demo_recording.wav';
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const stopRecordingAfterOneSecond = async () => {
      await delay(1000);  // TODO get end value from inputParamValues duration?
      mediaRecorder.stop();
    }

    mediaRecorder.start();
    stopRecordingAfterOneSecond();

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
