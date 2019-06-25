import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='todo-header'>ToDo List</h1>
        <form className='todo-form' onSubmit={this.addTodo}>
          <input
          onChange={this.updateNewTodo}
          placeholder='New todo...'
          value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);