import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  count: 0,
  action: '',
  memory: 0,
  actionClicked: false
};

function reducer(state = initialState, action) {

  let result;

  let operator = () => {
    if ( state.actionClicked ) {
      result = state.count;
    } else {
      if ( state.action === 'plus' ) {
        result = state.memory + state.count;
      } else if ( state.action === 'minus' ) {
        result = state.memory - state.count;
      } else if ( state.action === 'divide' ) {
        result = state.memory / state.count;
      } else if ( state.action === 'multiply' ) {
        result = state.memory * state.count;
      } else {
        result = state.count;
      }
    }
    return result;
  }

  let actionClicked = () => {
    if ( state.actionClicked ) {
      state.count = 0;
    }
  }

  switch(action.type) {
    case 'ZERO':
      actionClicked();
      return {
        count: parseInt(state.count + '0'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'ONE':
      actionClicked();
      return {
        count: parseInt(state.count + '1'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'TWO':
      actionClicked();
      return {
        count: parseInt(state.count + '2'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'THREE':
      actionClicked();
      return {
        count: parseInt(state.count + '3'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'FOUR':
      actionClicked();
      return {
        count: parseInt(state.count + '4'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'FIVE':
      actionClicked();
      return {
        count: parseInt(state.count + '5'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'SIX':
      actionClicked();
      return {
        count: parseInt(state.count + '6'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'SEVEN':
      actionClicked();
      return {
        count: parseInt(state.count + '7'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'EIGHT':
      actionClicked();
      return {
        count: parseInt(state.count + '8'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'NINE':
      actionClicked();
      return {
        count: parseInt(state.count + '9'),
        action: state.action,
        memory: state.memory,
        actionClicked: false
      };
    case 'CLEAR':
      return {
        count: 0,
        action: '',
        memory: 0,
        actionClicked: false
      };
    case 'PLUS':
      operator();
      return {
        count: result,
        memory: result,
        action: 'plus',
        actionClicked: true
      };
      case 'MINUS':
      operator();
        return {
          count: result,
          memory: result,
          action: 'minus',
          actionClicked: true
        };
      case 'DIVIDE':
      operator();
        return {
          count: result,
          memory: result,
          action: 'divide',
          actionClicked: true
        };
      case 'MULTIPLY':
      operator();
        return {
          count: result,
          memory: result,
          action: 'multiply',
          actionClicked: true
        };
      case 'EQUAL':
      operator();
        return {
          count: result,
          memory: result,
          action: '',
          actionClicked: true
        };
      default:
        return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
