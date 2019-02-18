import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import QuizEngine from 'quiz/QuizEngine';

export default class QuizControl extends Component {

  render() {
    return (
      <Button
        variant="contained"
        style={{ marginBottom: 20 }}
        onClick={() => QuizEngine.start()}
      >
        Play Random Note
      </Button>
    );
  }
}
