import React, { Component } from 'react';
import Todoitem from './Todoitem';
import Proptypes from 'prop-types';

class Todos extends Component {

render() {
  
  return this.props.stuff.map((row) => (
  <Todoitem key={row.id} row={row} 
  markComplete={this.props.markComplete}
  delTodo={this.props.delTodo}
  />
  ));
}
}

//Proptypes
Todos.propTypes = {
    stuff: Proptypes.array.isRequired,
    markComplete: Proptypes.func.isRequired,
    delTodo: Proptypes.func.isRequired
}

export default Todos;
