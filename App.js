import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
    finalList: '',
    position: ''
  }

  inputChangeHandler = (event) => {
    let val = event.target.value;
    if (val < 0 && val > 100) {
      alert('Enter value betwee 0 To 1000');
    }
    this.setState(() => {
      return { inputValue: val }
    })
  }

  increment(){
    var position = this.state.inputValue
    if (position < 100){
      this.setState({position: this.state.inputValue + 20})
    }
  }
  
  decrement(){
    var position = this.state.inputValue
    if (position > 1){
      this.setState({position:this.state.inputValue - 20})
    }
  }
  
 calculateHandler = () => {
    const input = this.state.inputValue;
    let list = [];
    if (input) {
      let i;
      for (i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          list.push('fizz buzz');
          continue;
        }
        if (i % 3 === 0) {
          list.push('fizz');
          continue;
        } else if (i % 5 === 0) {
          list.push('Buzz');
          continue;
        }
        list.push(i);
        console.log(list);
      }
    }
    this.setState({finalList: list});    
  }

  render() {

    let totalList = ''

    if (this.state.finalList) {
      totalList = this.state.finalList.map(list => {
        return (
          <li>{list}</li>
        )
      })
    }


    return (
      <div className="section">
        <input onChange={this.inputChangeHandler} className="input" type="text" />
        <input type="submit" value="Submit" onClick={this.calculateHandler} />
        <br />
        <br />
        <button onClick={this.decrement.bind(this)} id="dec">Prev</button>
        <button onClick={this.increment.bind(this)} id="inc">Next</button>
        <ul>
          {totalList}
        </ul>
      </div>
    );
  }
}

export default App;
