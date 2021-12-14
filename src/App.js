import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ' '
    }
  }

  handleInputChange = ({ target }) => this.setState.text(target.value)

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={handleInputChange} value={this.state.text}></textarea>
        <div className="counter">{this.state.text.length}</div>
      </div>
    );
  }
}

export default App;
