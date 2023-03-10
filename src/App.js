// App.js

import React, { Component } from 'react';
import MyComponent from './MyComponent';

class AppClass extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MyComponent title="foobar"/>
    </div>
  )
}

export default App;