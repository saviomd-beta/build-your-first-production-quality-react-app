import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Footer, TodoForm, TodoList} from './components/todo'
import {addTodo, findById, generateId, removeTodo, toggleTodo, updateTodo} from './lib/todoHelpers'
import {partial, pipe} from './lib/utils'

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an Awesome App', isComplete: false},
      {id: 3, name: 'Ship it!', isComplete: false}
    ],
    currentTodo: '',
  }
  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }
  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }
  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {
      id: newId,
      isComplete: false,
      name: this.state.currentTodo,
    }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      currentTodo: '',
      errorMessage: '',
      todos: updatedTodos,
    })
  }
  handleToggle = (id) => {
    // const todo = findById(id, this.state.todos)
    // const toggled = toggleTodo(todo)
    // const updatedTodos = updateTodo(this.state.todos, toggled)
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({
      todos: updatedTodos
    })
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList
            handleRemove={this.handleRemove}
            handleToggle={this.handleToggle}
            todos={this.state.todos}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
