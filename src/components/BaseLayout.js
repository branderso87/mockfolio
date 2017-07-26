import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {

  render () {
    return (
      <div className="layout">
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          </ul>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default BaseLayout
