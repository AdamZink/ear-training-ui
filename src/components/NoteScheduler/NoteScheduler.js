import { Component } from 'react';

class NoteScheduler extends Component {

  scheduleNote(note) {
    this.currentTime = this.props.audioContext.currentTime;

    if (note.params === undefined || note.params.fundamental === undefined) {
      this.params = {
        fundamental: 440
      };
    } else {
      this.params = note.params;
    }

    this.params = note.params;

    let destination = this.props.audioContext.destination;

    note.graph.forEach((node) => this.connectNode(node, destination));
  }

  connectNode(node, destination) {
    switch (node.type) {
      case "gain":
        let gainNode = this.connectGainNode(node.properties, destination);
        this.connectSources(node.connections, gainNode);
        break;

      case "oscillator":
        let oscillatorNode = this.connectOscillatorNode(node.properties, destination);
        this.connectSources(node.connections, oscillatorNode);
        break;

      default:
        console.log("Node type not found");
    }
  }

  connectGainNode(properties, destination) {
    if (properties.value !== undefined) {
      let constantGainNode = this.props.audioContext.createGain();
      constantGainNode.gain.setValueAtTime(properties.value, this.currentTime);
      constantGainNode.connect(destination);
      return constantGainNode;
    }
  }

  connectOscillatorNode(properties, destination) {
    if (properties.type === undefined || properties.multiple === undefined)
      return destination;

    switch (properties.type) {
      case "sine":
        let sineOscillatorNode = this.props.audioContext.createOscillator();
        sineOscillatorNode.type = "sine";
        sineOscillatorNode.frequency.value = this.params.fundamental * properties.multiple;
        sineOscillatorNode.connect(destination);

        sineOscillatorNode.start(this.currentTime);
        sineOscillatorNode.stop(this.currentTime + 0.5);

        return sineOscillatorNode;

      default:
        console.log("Oscillator type not found");
    }
  }

  connectSources(connections, destination) {
    if (connections !== undefined) {
      connections.forEach((source) => this.connectNode(source, destination));
    }
  }

  render() {
    return null;
  }
}

export default NoteScheduler;
