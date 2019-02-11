import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

import { WebAudioEngine } from 'audio';
import { keyFrequencies } from 'audio/definitions';

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

export default class Keyboard extends Component {

  getKeyList() {
    return keyFrequencies.map((keyFrequency) => {
        if (keyFrequency.color === 'white')
          return this.getWhiteKey(keyFrequency.frequency);
        else if (keyFrequency.color === 'black')
          return this.getBlackKey(keyFrequency.frequency);
        else return null;
      }
    );
  }

  getWhiteKey(frequency) {
    return (
      <Grid item>
        <WhiteKey variant="contained" onMouseDown={() => WebAudioEngine.playKeyboard(frequency)} />
      </Grid>
    );
  }

  getBlackKey(frequency) {
    return (
      <Grid item>
        <BlackKey variant="contained" onMouseDown={() => WebAudioEngine.playKeyboard(frequency)} />
      </Grid>
    );
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center" spacing={0}>
        {this.getKeyList()}
      </Grid>
    );
  }
}
