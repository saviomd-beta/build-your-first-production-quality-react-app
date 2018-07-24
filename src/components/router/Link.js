import PropTypes from 'prop-types';
import React, {Component} from 'react'

const propTypes = {
  to: PropTypes.string.isRequired,
}

export class Link extends Component {
  handleClick = (evt) => {
    evt.preventDefault()
    window.history.pushState(null, '', this.props.to)
  }
  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = propTypes
