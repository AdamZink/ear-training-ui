import React from 'react';
import PropTypes from 'prop-types';

import './NoteDemoTitle.css';

export default function NoteDemoTitle(props) {
  return (
    <div className="NoteDemoTitle">{props.title}</div>
  );
}

NoteDemoTitle.propTypes = {
  title: PropTypes.string.isRequired
};
