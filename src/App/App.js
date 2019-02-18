import React, { Component } from 'react';

import QuizControl from './QuizControl';
import Keyboard from './Keyboard';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Ear Training</h2>
        <QuizControl />
        <Keyboard />
      </div>
    );
  }
}
