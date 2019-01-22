import React, { Component } from 'react';
import './App.css';
import { WebAudioEngine } from 'audio';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>React Web Audio Demo</h2>
        <table>
          <tr>
            <td><button onClick={() => WebAudioEngine.recordSine()}>Record Sine</button></td>
            <td><button onClick={() => WebAudioEngine.recordSquare()}>Record Square</button></td>
            <td><button onClick={() => WebAudioEngine.recordSawtooth()}>Record Sawtooth</button></td>
            <td><button onClick={() => WebAudioEngine.recordTriangle()}>Record Triangle</button></td>
          </tr>
        </table>
        <div>
          <audio id="recording" controls></audio>
        </div>
        <div>
          <a id="downloadAudio" href="#">Download the recording</a>
        </div>
      </div>
    );
  }
}
