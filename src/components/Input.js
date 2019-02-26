import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateValue } from '../redux/redux';

class Input extends Component {
  render() {
    return <input type="text" value={this.props.name} onChange={this.props.update}/>;
  }
}

const mapStateToProps = state => {
  return {
    name: state.inputValue
  }
}

const mapDispatchToProps = dispatch =>  {
  return {
    update: (event) => dispatch(updateValue(event))
    }
  }

export const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
