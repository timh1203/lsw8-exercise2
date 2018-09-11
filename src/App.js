import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
        </div>
      </Router>
    )
  }
}

export default App
