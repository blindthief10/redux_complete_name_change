import React, { Component } from 'react';
import { ParagraphContainer } from './components/Paragraph';
import { FormContainer } from './components/Form';

export default class App extends Component {
  render() {
    return (
      <>
        <FormContainer/>
        <ParagraphContainer />
      </>
    );
  }
}
