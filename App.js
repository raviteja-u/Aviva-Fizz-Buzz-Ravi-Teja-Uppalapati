import React, { Component } from 'react';
import './App.css';
// import Fizz from './Fizz/Fizz';

class App extends Component {
  state = {
    inputValue: '',
    finalList: ''
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
    const input = parseInt(this.state.inputValue);
    let list = [];
    if (input) {
      let i;
      for (i = 0; i <= input; i++) {
        if (i % 3 === 0) {
          list.push('fizz');
          // console.log('Fizz');
          continue;
        } else if (i % 5 === 0) {
          list.push('Buzz');
          // console.log('Buzz');
          continue;
        }
        list.push(i);
        console.log(list);
      }
    }
    this.setState({finalList: list});    
  }

  render() {

    if (this.state.finalList) {
      
    }


    return (
      <div className="section">
        INPUT <input onChange={this.inputChangeHandler} className="input" type="text" />
        <input type="submit" value="Submit" onClick={this.calculateHandler} />
        <br />
        <br />
        <a className="btn" href="#">PREV</a>
        <input className="inputField" type="text" />
        <ul>
        {this.state.finalList ? (
          console.log('kdkdkdkdk' + this.state.finalList)
        ) : null}
        </ul>
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

      // else if (i % 3 === 0 && i % 5 === 0) {
      //     console.log('Buzz');
      //     continue;
      //   }