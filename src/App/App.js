import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import NoteDemo from './NoteDemo';
import { WebAudioEngine } from 'audio';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>React Web Audio Demo</h2>
        <Grid container direction="column" alignItems="center" spacing={24}>
          <Grid item md={3}>
            <NoteDemo title="Sine" recordFunc={WebAudioEngine.recordSine} />
          </Grid>
          <Grid item md={3}>
            <NoteDemo title="Square" recordFunc={WebAudioEngine.recordSquare} />
          </Grid>
          <Grid item md={3}>
            <NoteDemo title="Sawtooth" recordFunc={WebAudioEngine.recordSawtooth} />
          </Grid>
          <Grid item md={3}>
            <NoteDemo title="Triangle" recordFunc={WebAudioEngine.recordTriangle} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
