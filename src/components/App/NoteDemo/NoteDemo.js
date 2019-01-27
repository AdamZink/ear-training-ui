import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoteDemoTitle from './NoteDemoTitle';
import PlayRecordButton from './PlayRecordButton';

export default class NoteDemo extends Component {

  render() {
    return (
      <div className="NoteDemo">
        <NoteDemoTitle title={this.props.title} />
        <PlayRecordButton recordFunc={this.props.recordFunc} />
      </div>
    );
  }
}

NoteDemo.propTypes = {
  title: PropTypes.string.isRequired,
  recordFunc: PropTypes.func.isRequired
};
