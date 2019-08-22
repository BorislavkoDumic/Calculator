/* eslint-disable eqeqeq */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearAllButton from './components/ClearAllButton';
import ClearButton from './components/ClearButton';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: "",
      previusNumber:"",
      currentNumber:"",
      operator: ""
    }
  }

  addToInput= val =>{
    this.setState({input: this.state.input+val})
  };

  addDecimal = val =>{
    if(this.state.input.indexOf(".")=== -1){
      this.setState({input:this.state.input + val});
    }
  };
  clearInput = ()=>{
    this.setState({
      input: this.state.input.slice(0,-1)
    })
  }

  clearAllInput = ()=>{
    this.setState({input:""});
  };

  calculation = (operator)=>{
    this.setState({
      input:"",
      operator: operator,
      previusNumber: this.state.input
    })
  }
  evaluate = ()=> {
    this.state.currentNumber = this.state.input;

    let result;
    if (this.state.operator == App.PLUS ){
      result = parseFloat(this.state.previusNumber)+parseFloat(this.state.currentNumber)
    }
    else if (this.state.operator == App.SUBTRACT ){
      result = parseFloat(this.state.previusNumber)-parseFloat(this.state.currentNumber)
    }
    else if (this.state.operator == App.MULTIPLY ){
      result = parseFloat(this.state.previusNumber)*parseFloat(this.state.currentNumber)
    }
    else if (this.state.operator == App.DIVIDE ){
      result = parseFloat(this.state.previusNumber)/parseFloat(this.state.currentNumber)
    }

    this.setState({
      input: result.toString()
    });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={()=>this.calculation(App.DIVIDE)}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={(event)=>{this.calculation(App.MULTIPLY)}}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={(event)=>{this.calculation(App.PLUS)}}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={(event=>{this.calculation(App.SUBTRACT)})}>-</Button>
          </div>
          <div className='row'>
            <ClearButton handleClearAll={this.clearInput}>Clear</ClearButton>
          </div>
          <div className='row'>
            <ClearAllButton handleClearAll={this.clearAllInput}>Clear All</ClearAllButton>
          </div>
        </div>
      </div>
    );
  }
}

App.PLUS="plus"
App.SUBTRACT="subtract"
App.MULTIPLY="multiply"
App.DIVIDE="divide"
App.CLEAR="clear"
App.CLEARALL="clearAll"

export default App;
