import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    const Home = () => {
      return (
        <h1>HOME</h1>
      )
    }
  
    const Topics = () => {
      return (
        <h1>TOPICS</h1>
      )
    }

    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    )
  }
}

export default App
