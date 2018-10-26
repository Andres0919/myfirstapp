import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json'
import Navigation from './components/Navigation';

class App extends Component {
  constructor(){
    super();

    this.state = {
      todos
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="card">
          <div className="card-header">
            <h3> { todo.title } </h3>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
        <Navigation title="My first navigation" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="display-1">This is my first app with react, do you like it?</h1>
        </header>
        { todos }
      </div>
    );
  }
}

export default App;
