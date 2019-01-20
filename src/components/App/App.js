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
            <td><button onClick={() => WebAudioEngine.playSine()}>Play Sine</button></td>
            <td><button onClick={() => WebAudioEngine.playSquare()}>Play Square</button></td>
            <td><button onClick={() => WebAudioEngine.playSawtooth()}>Play Sawtooth</button></td>
            <td><button onClick={() => WebAudioEngine.playTriangle()}>Play Triangle</button></td>
          </tr>
        </table>
      </div>
    );
  }
}
