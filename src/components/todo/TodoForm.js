import React from 'react'

export const TodoForm = (props) => (
  <form>
    <input
      type="test"
      onChange={props.handleInputChange}
      value={props.currentTodo}
    />
  </form>
)
