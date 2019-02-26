import React, { Component } from 'react';
import {InputContainer} from './Input';
import Button from './Button';
import {submitForm} from '../redux/redux';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.depictName}>
        <InputContainer />
        <Button />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    depictName: (event) => dispatch(submitForm(event))
  }
}

export const FormContainer = connect(null, mapDispatchToProps)(Form);
