import PropTypes from 'prop-types'
import React from 'react'
import {partial} from '../../lib/utils'

const propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

export const TodoItem = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  const handleToggle = partial(props.handleToggle,  props.id)
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={handleRemove}>x</a>
      </span>
      <input
        checked={props.isComplete}
        onChange={handleToggle}
        type="checkbox"
      />
      {props.name}
    </li>
  )
}

TodoItem.propTypes = propTypes
