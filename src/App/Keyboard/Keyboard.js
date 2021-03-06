import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { keyFrequencies } from 'audio/definitions';
import Key from './Key';

export default class Keyboard extends Component {

  render() {
    return (
      <Grid container direction="column" alignItems="center" spacing={0}>
        {keyFrequencies.map((keyFrequency) =>
          <Grid item>
            <Key
              color={keyFrequency.color}
              frequency={keyFrequency.frequency}
              inQuizMode={this.props.inQuizMode}
            />
          </Grid>
        )}
      </Grid>
    );
  }
}

Keyboard.propTypes = {
  inQuizMode: PropTypes.bool.isRequired
};
