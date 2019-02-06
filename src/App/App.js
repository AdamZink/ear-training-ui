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
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(493.8833)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playSine(466.1638)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(440.0000)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playSine(415.3047)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(391.9954)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playSine(369.9944)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(349.2282)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(329.6276)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playSine(311.1270)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(293.6648)} /></Grid>
          <Grid item><BlackKey variant="contained" onClick={() => WebAudioEngine.playSine(277.1826)} /></Grid>
          <Grid item><WhiteKey variant="contained" onClick={() => WebAudioEngine.playSine(261.6256)} /></Grid>
        </Grid>
      </div>
    );
  }
}
