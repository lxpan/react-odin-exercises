import React, { Component } from 'react';

class CounterApp extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{count}</p>
      </div>
    );
  }
}

export default CounterApp;