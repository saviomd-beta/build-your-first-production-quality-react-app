import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import {Footer, TodoForm, TodoList} from './components/todo'
import {addTodo, filterTodos, findById, generateId, removeTodo, toggleTodo, updateTodo} from './lib/todoHelpers'
import {loadTodos} from './lib/todoService'
import {partial, pipe} from './lib/utils'

class App extends Component {
  state = {
    todos: [],
    currentTodo: '',
  }
  static contextTypes = {
    route: PropTypes.string
  }
  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
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
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    console.log(this.context.route);
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
            todos={displayTodos}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
