import PropTypes from 'prop-types'
import React from 'react'
import {partial} from '../../lib/utils'

const propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle,  props.id)
  return (
    <li>
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
