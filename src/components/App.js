import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/App.css'
import Home from './Home'
import Portfolio from './Portfolio'
import BaseLayout from './BaseLayout'
import About from './About.js'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <BaseLayout>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </BaseLayout>
      </BrowserRouter>

    )
  }
}

export default App
