import React, { Component } from 'react';

import QuizControl from './QuizControl';
import Keyboard from './Keyboard';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inQuizMode: false
    };
  }

  setQuizMode = (newValue) => {
    this.setState({
      inQuizMode: newValue
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Ear Training</h2>
        <QuizControl
          inQuizMode={this.state.inQuizMode}
          setQuizMode={this.setQuizMode}
        />
        <Keyboard inQuizMode={this.state.inQuizMode} />
      </div>
    );
  }
}
