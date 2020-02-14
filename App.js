import React, { Component } from 'react';
import './App.css';
import Fizz from './Fizz/Fizz';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChangeHandler = (event) => {
    let val = event.target.value;
    if (val < 0 && val > 100) {
      console.log(val);
      alert('Enter value betwee 0 To 1000');
    }
    this.setState(() => {
      return { inputValue: val }
    })
  }

  calculateHandler = () => {
    const input = this.state.inputValue;
    console.log(input);
  }

  render() {
    return (

      <div className="section">
        INPUT <input onChange={this.inputChangeHandler} className="input" type="text" />
        <input type="submit" value="Submit" onClick={this.calculateHandler} />
        <br />
        <br />
        <a className="btn" href="#">PREV</a>
        <input className="inputField" type="text" />
        <a className="btn" href="#">NEXT</a>

      </div>
    );
  }
}

export default App;



// <div className="App">
      //   <Fizz
      //     clicked={this.inputChangeHandler}
      //     value={this.state.inputValue} />
      // </div>