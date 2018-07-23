import PropTypes from 'prop-types'
import React from 'react'
import {TodoItem} from './TodoItem'

const propTypes = {
  todos: PropTypes.array.isRequired,
}

export const TodoList = (props) => {
  return (
    <div className="Todo-list">
      <ul>
        {props.todos.map(todo => (
          <TodoItem
            handleToggle={props.handleToggle}
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </div>
  )
}

TodoList.propTypes = propTypes
