import React, { Component } from 'react';

import NoteDemo from './NoteDemo';
import { WebAudioEngine } from 'audio';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>React Web Audio Demo</h2>
        <table><tbody>
          <tr>
            <td><NoteDemo title="Sine" recordFunc={WebAudioEngine.recordSine} /></td>
            <td><NoteDemo title="Square" recordFunc={WebAudioEngine.recordSquare} /></td>
            <td><NoteDemo title="Sawtooth" recordFunc={WebAudioEngine.recordSawtooth} /></td>
            <td><NoteDemo title="Triangle" recordFunc={WebAudioEngine.recordTriangle} /></td>
          </tr>
        </tbody></table>
      </div>
    );
  }
}
