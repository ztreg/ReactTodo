import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import logo from './logo.svg';
import Header from "./components/layoutComps/Header";
import Todos from "./components/todoComps/Todos";
import AddTodo from "./components/todoComps/AddTodo";
import About from "./components/pages/About";
import axios from 'axios';
import uuid from 'uuid';

class App extends Component {
  state = {
    stuff: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({ stuff: myJson})
  });
}

  // Toggle Complete
  markComplete = id => {
    this.setState({
      stuff: this.state.stuff.map(row => {
        if (row.id === id) {
          row.completed = !row.completed;
        }
        return row;
      })
    });
  };

  //Delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      stuff: [...this.state.stuff.filter(row => row.id !== id)]
    }));
    
  };

  //Add Todo
  addTodo = (title) => {
    /*
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };*/

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      id: uuid.v4(),
      title,
      completed: false
    }).then(res => this.setState({ stuff: 
      [...this.state.stuff, res.data] }));
  };

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos
                stuff={this.state.stuff}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
              
            </React.Fragment>
          )} />
          <Route path="/about" component={About}>

          </Route>
   
        </div>
      

       
      </div>
      <img src={logo} className="Logo2" alt="logo"/>
        <img src={logo} className="Logo" alt="logo"/>
      </Router>
    );
  }
}

export default App;
