import React, {Component} from 'react'
import PropTypes from 'prop-types'

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }
  handleLinkClick = (route) => {
    this.setState({route})
    window.history.pushState(null, '', route)
  }
  static childContextTypes = {
    linkHandler: PropTypes.func,
    route: PropTypes.string,
  }
  getChildContext() {
    return {
      linkHandler: this.handleLinkClick,
      route: this.state.route,
    }
  }
  render () {
    return <div>{this.props.children}</div>
  }
}
