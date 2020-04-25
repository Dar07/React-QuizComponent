import React, { Component } from 'react';

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    render () {
      <div>
       Quiz
      </div>
    }
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { quiz_position: 1 };
        // this.handleClick = this.handleClick.bind(this);
      }
  }

  export default Quiz;