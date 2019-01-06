const DEFAULT_NOTE_LENGTH = 0.5;

class NoteScheduler {

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

    note.graph.forEach((node) => this.connectNode(audioContext, node, destination));
  }

  static connectNode(audioContext, node, destination) {
    switch (node.type) {
      case "gain":
        let gainNode = this.connectGainNode(audioContext, node.properties, destination);
        this.connectSources(audioContext, node.connections, gainNode);
        break;

      case "oscillator":
        let oscillatorNode = this.connectOscillatorNode(audioContext, node.properties, destination);
        this.connectSources(audioContext, node.connections, oscillatorNode);
        break;

      default:
        console.log("Node type not found");
    }
  }

  static connectGainNode(audioContext, properties, destination) {
    if (properties.value !== undefined) {
      let constantGainNode = audioContext.createGain();
      constantGainNode.gain.setValueAtTime(properties.value, this.currentTime);
      constantGainNode.connect(destination);
      return constantGainNode;
    }
    else if (properties.values !== undefined) {
      var envelopeGainNode = audioContext.createGain();
      envelopeGainNode.gain.setValueAtTime(0.00001, this.currentTime);
      properties.values.forEach((value) => this.setEnvelopeValue(envelopeGainNode, value));
      envelopeGainNode.gain.exponentialRampToValueAtTime(0.00001, this.currentTime + DEFAULT_NOTE_LENGTH);
      envelopeGainNode.connect(destination);
      return envelopeGainNode;
    }
  }

  static setEnvelopeValue(envelopeGainNode, value) {
    if (value.type === undefined)
      return;

    let calculatedTime = value.timeFrom === "start" ? this.currentTime + value.time : this.currentTime + DEFAULT_NOTE_LENGTH - value.time
    switch (value.type) {
      case "linear":
        envelopeGainNode.gain.linearRampToValueAtTime(value.value, calculatedTime);
        break;

      case "exponential":
        envelopeGainNode.gain.exponentialRampToValueAtTime(value.value, calculatedTime);
        break;

      default:
        break;
    }
  }

  static connectOscillatorNode(audioContext, properties, destination) {
    if (properties.type === undefined || properties.multiple === undefined)
      return destination;

    switch (properties.type) {
      case "sine":
        let sineOscillatorNode = audioContext.createOscillator();
        sineOscillatorNode.type = "sine";
        sineOscillatorNode.frequency.value = this.params.fundamental * properties.multiple;
        sineOscillatorNode.connect(destination);

        sineOscillatorNode.start(this.currentTime);
        sineOscillatorNode.stop(this.currentTime + DEFAULT_NOTE_LENGTH);

        return sineOscillatorNode;

      default:
        console.log("Oscillator type not found");
    }
  }

  static connectSources(audioContext, connections, destination) {
    if (connections !== undefined) {
      connections.forEach((source) => this.connectNode(audioContext, source, destination));
    }
  }
}

export default NoteScheduler;
