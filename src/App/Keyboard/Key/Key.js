import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { WebAudioEngine } from 'audio';
import QuizEngine from 'quiz/QuizEngine';
import { KeyButton } from './KeyStyles';

export default class Key extends Component {

  render() {
    return (
      <Grid item>
        <KeyButton
          variant="contained"
          style={{ backgroundColor: this.props.color }}
          onMouseDown={() => {
            WebAudioEngine.playKeyboard(this.props.frequency);
            QuizEngine.answer(this.props.frequency);
          }}
        />
      </Grid>
    );
  }
}

Key.propTypes = {
  color: PropTypes.string.isRequired,
  frequency: PropTypes.number.isRequired
};
