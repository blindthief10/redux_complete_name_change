import { createStore } from 'redux';

const initialState = {inputValue: '', nameAfterSubmit: ''};

const reducer = (state = initialState, action) => {
  const updatedState = {...state};
  switch(action.type) {
    case 'UPDATE':
      updatedState.inputValue = action.event.target.value;
      return updatedState;
    case 'SUBMIT':
      action.event.preventDefault();
      updatedState.nameAfterSubmit = state.inputValue;
      updatedState.inputValue = '';
      return updatedState;
    default:
      return state;
  }
}


export const updateValue = (event) => {
  return {
    type: 'UPDATE',
    event: event
  }
}

export const submitForm = (event) => {
  return {
    type: 'SUBMIT',
    event: event
  }
}

export const store = createStore(reducer);
