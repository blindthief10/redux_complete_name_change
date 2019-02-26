import React, { Component } from 'react';
import { connect } from 'react-redux';

class Paragraph extends Component {
  render() {
    return <p>{this.props.nameDepicted}</p>;
  }
}

const mapStateToProps = state => {
  return {
    nameDepicted: state.nameAfterSubmit
  }
}

export const ParagraphContainer = connect(mapStateToProps)(Paragraph);
