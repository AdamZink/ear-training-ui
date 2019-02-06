import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

import { WebAudioEngine } from 'audio';
import './App.css';

const Key = withStyles({
  root: {
    width: 160,
    height: 30,
    marginBottom: 2
  }
})(Button);

const WhiteKey = withStyles({
  root: {
    backgroundColor: 'white',
  }
})(Key);

const BlackKey = withStyles({
  root: {
    backgroundColor: 'black'
  }
})(Key);

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Ear Training</h2>
        <Grid container direction="column" alignItems="center" spacing={0}>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(493.8833)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(466.1638)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(440.0000)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(415.3047)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(391.9954)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(369.9944)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(349.2282)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(329.6276)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(311.1270)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(293.6648)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(277.1826)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playKeyboard(261.6256)} /></Grid>
        </Grid>
      </div>
    );
  }
}
