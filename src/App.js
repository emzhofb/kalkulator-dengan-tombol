import React, { Component } from 'react';

class App extends Component {

  constructor () {
    super ()
    this.state = {
      inputan: '',
      number: 0
    }
  }

  _handleLoop = () => {
    const inputanKu = this.state.inputan
    let numTemp = []
    let stringNum = ''
    let lastNum = ''

    for (let i = 0; i < inputanKu.length; i++) {
      if (inputanKu[i] === '1' || inputanKu[i] === '2' || inputanKu[i] === '3' || inputanKu[i] === '4' || inputanKu[i] === '5' || inputanKu[i] === '6' || inputanKu[i] === '7' || inputanKu[i] === '8' || inputanKu[i] === '9' || inputanKu[i] === '0') {
        stringNum += inputanKu[i]
      } else {
        numTemp.push(stringNum)
        stringNum = ''
        numTemp.push(inputanKu[i])
      }
    }
    for (let i = 0; i < inputanKu.length; i++) {
      if (inputanKu[i] === '*' || inputanKu[i] === '/' || inputanKu[i] === '+' || inputanKu[i] === '-') {
        lastNum = '';
      } else {
        lastNum += inputanKu[i]
      }
    }
    numTemp.push(lastNum)

    let result = Number(numTemp[0])
    for (let i = 1; i < numTemp.length; i++) {
      if (numTemp[i] === '*') {
        let j = i+1;
        result = result * Number(numTemp[j])
      }
      if (numTemp[i] === '/') {
        let j = i+1;
        result = result / Number(numTemp[j])
      }
      if (numTemp[i] === '+') {
        let j = i+1;
        result = result + Number(numTemp[j])
      }
      if (numTemp[i] === '-') {
        let j = i+1;
        result = result - Number(numTemp[j])
      }
    }

    this.setState({
      number: result
    })
  }

  _handleChange = (element) => {
    this.setState({[element.target.name]: element.target.value})
  }

  render() {
    return (
      <div>
        <input
          onChange = {this._handleChange}
          name = "inputan"
          value = {this.state.inputan} />
        <button onClick = {this._handleLoop}>Hitung!</button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default App;
