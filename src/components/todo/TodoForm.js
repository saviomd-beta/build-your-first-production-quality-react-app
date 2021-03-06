import PropTypes from 'prop-types';
import React from 'react'

const propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="test"
      onChange={props.handleInputChange}
      value={props.currentTodo}
    />
  </form>
)

TodoForm.propTypes = propTypes
