import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { WebAudioEngine } from 'audio';
import QuizEngine from 'quiz/QuizEngine';
import { KeyButton } from './KeyStyles';

export default class Key extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.color
    }
  }

  handleAnswer = (keyObject, isCorrect) => {
    if (isCorrect) {
      keyObject.setState({
        currentColor: "green"
      });
    } else {
      keyObject.setState({
        currentColor: "red"
      });
    }

    setTimeout(function() {
      keyObject.setState({
        currentColor: keyObject.props.color
      });
    }, 400);
  }

  render() {
    return (
      <Grid item>
        <KeyButton
          variant="contained"
          style={{ backgroundColor: this.state.currentColor }}
          onMouseDown={() => {
            WebAudioEngine.playKeyboard(this.props.frequency);
            if (this.props.inQuizMode) {
              QuizEngine.answer(this, this.props.frequency, this.handleAnswer);
            }
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
