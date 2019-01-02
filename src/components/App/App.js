import React, { Component } from 'react';
import './App.css';
import WebAudioEngine from 'components/WebAudioEngine';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>React Web Audio Demo</h2>
        <p>
          <WebAudioEngine ref="webAudioEngine" />
          <button onClick={() => this.refs.webAudioEngine.callScheduleNote()}>Play Tone</button>
        </p>
      </div>
    );
  }
}

export default App;
