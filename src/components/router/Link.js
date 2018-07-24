import PropTypes from 'prop-types';
import React, {Component} from 'react'

const propTypes = {
  to: PropTypes.string.isRequired,
}

export class Link extends Component {
  static contextTypes = {
    linkHandler: PropTypes.func,
    route: PropTypes.string,
  }
  handleClick = (evt) => {
    evt.preventDefault()
    this.context.linkHandler(this.props.to)
  }
  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return <a className={activeClass} href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = propTypes
