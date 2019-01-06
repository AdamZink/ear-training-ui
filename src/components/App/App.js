import React, { Component } from 'react';
import './App.css';
import WebAudioEngine from 'audio/engine/WebAudioEngine';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>React Web Audio Demo</h2>
        <p>
          <button onClick={() => WebAudioEngine.callScheduleNote()}>Play Tone</button>
        </p>
      </div>
    );
  }
}

export default App;
