import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete} />
      {props.name}
    </li>
  )
}

TodoItem.propTypes = propTypes
