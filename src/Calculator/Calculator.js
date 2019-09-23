import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Calculator.css';

class Calculator extends Component {
  zeroHandler = () => {
    this.props.dispatch({ type: 'ZERO' });
  }
  oneHandler = () => {
    this.props.dispatch({ type: 'ONE' });
  }
  twoHandler = () => {
    this.props.dispatch({ type: 'TWO' });
  }
  threeHandler = () => {
    this.props.dispatch({ type: 'THREE' });
  }
  fourHandler = () => {
    this.props.dispatch({ type: 'FOUR' });
  }
  fiveHandler = () => {
    this.props.dispatch({ type: 'FIVE' });
  }
  sixHandler = () => {
    this.props.dispatch({ type: 'SIX' });
  }
  sevenHandler = () => {
    this.props.dispatch({ type: 'SEVEN' });
  }
  eightHandler = () => {
    this.props.dispatch({ type: 'EIGHT' });
  }
  nineHandler = () => {
    this.props.dispatch({ type: 'NINE' });
  }
  clearHandler = () => {
    this.props.dispatch({ type: 'CLEAR' });
  }
  divideHandler = () => {
    this.props.dispatch({ type: 'DIVIDE' });
  }
  multiplyHandler = () => {
    this.props.dispatch({ type: 'MULTIPLY' });
  }
  minusHandler = () => {
    this.props.dispatch({ type: 'MINUS' });
  }
  plusHandler = () => {
    this.props.dispatch({ type: 'PLUS' });
  }
  equalHandler = () => {
    this.props.dispatch({ type: 'EQUAL' });
  }

  componentDidMount(){
    window.document.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 48 || event.keyCode === 96) {
        document.getElementById("zero").click();
      } else if (event.keyCode === 49 || event.keyCode === 97) {
        document.getElementById("one").click();
      } else if (event.keyCode === 50 || event.keyCode === 98) {
        document.getElementById("two").click();
      } else if (event.keyCode === 51 || event.keyCode === 99) {
        document.getElementById("three").click();
      } else if (event.keyCode === 52 || event.keyCode === 100) {
        document.getElementById("four").click();
      } else if (event.keyCode === 53 || event.keyCode === 101) {
        document.getElementById("five").click();
      } else if (event.keyCode === 54 || event.keyCode === 102) {
        document.getElementById("six").click();
      } else if (event.keyCode === 55 || event.keyCode === 103) {
        document.getElementById("seven").click();
      } else if (event.keyCode === 56 || event.keyCode === 104) {
        document.getElementById("eight").click();
      } else if (event.keyCode === 57 || event.keyCode === 105) {
        document.getElementById("nine").click();
      } else if (event.keyCode === 107 || event.keyCode === 105) {
        document.getElementById("add").click();
      } else if (event.keyCode === 109) {
        document.getElementById("substract").click();
      } else if (event.keyCode === 111) {
        document.getElementById("divide").click();
      } else if (event.keyCode === 106) {
        document.getElementById("multiply").click();
      } else if (event.keyCode === 46 || event.keyCode === 110) {
        document.getElementById("ac").click();
      } else if (event.keyCode === 13) {
        document.getElementById("equal").click();
      }
    });
  }

  render() {

//    window.onload = this.sevenHandler;

    return(
      <div>
        <div className='calculator'>
          <div className='calculator-output'><div>{this.props.count}</div></div>
          <div className='calculator-row'>
            <div id='seven' onClick={this.sevenHandler} className='calculator-row-digit'><div>7</div></div>
            <div id='eight' onClick={this.eightHandler} className='calculator-row-digit'><div>8</div></div>
            <div id='nine' onClick={this.nineHandler} className='calculator-row-digit'><div>9</div></div>
            <div id='divide' onClick={this.divideHandler} className='calculator-division'><div>&divide;</div></div>
          </div>
          <div className='calculator-row'>
            <div id='four' onClick={this.fourHandler} className='calculator-row-digit'><div>4</div></div>
            <div id='five' onClick={this.fiveHandler} className='calculator-row-digit'><div>5</div></div>
            <div id='six' onClick={this.sixHandler} className='calculator-row-digit'><div>6</div></div>
            <div id='multiply' onClick={this.multiplyHandler} className='calculator-row-digit'><div>&#215;</div></div>
          </div>
          <div className='calculator-row'>
            <div id='one' onClick={this.oneHandler} className='calculator-row-digit'><div>1</div></div>
            <div id='two' onClick={this.twoHandler} className='calculator-row-digit'><div>2</div></div>
            <div id='three' onClick={this.threeHandler} className='calculator-row-digit'><div>3</div></div>
            <div id='substract' onClick={this.minusHandler} className='calculator-row-digit'><div>-</div></div>
          </div>
          <div className='calculator-row'>
            <div id='zero' onClick={this.zeroHandler} className='calculator-row-digit'><div>0</div></div>
            <div id='ac' onClick={this.clearHandler} className='calculator-row-digit'><div>AC</div></div>
            <div id='equal' onClick={this.equalHandler} className='calculator-row-digit'><div>=</div></div>
            <div id='add' onClick={this.plusHandler} className='calculator-row-digit'><div>+</div></div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Calculator);
