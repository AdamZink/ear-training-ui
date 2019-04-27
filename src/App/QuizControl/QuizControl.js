import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import QuizEngine from 'quiz/QuizEngine';

export default class QuizControl extends Component {

  handleClick() {
    if (this.props.inQuizMode === false) {
      if (typeof this.props.setQuizMode === "function") {
        this.props.setQuizMode(true);
        QuizEngine.start();
      }
    }
  }

  render() {
    return (
      <Button
        variant="contained"
        style={{ marginBottom: 20 }}
        onClick={() => this.handleClick()}
      >
        {this.props.inQuizMode ? "Quiz in progress" : "Start"}
      </Button>
    );
  }
}

QuizControl.propTypes = {
  inQuizMode: PropTypes.bool.isRequired,
  setQuizMode: PropTypes.func.isRequired
};
