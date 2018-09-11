import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import topics from './data/topics'

class App extends Component {
  render() {
    const Home = () => {
      return (
        <h1>HOME</h1>
      )
    }

    const Topic = ({ match }) => {
      return (
        <div>
          <h1>Topic</h1>
        </div>
      )
    }
  
    const Topics = ({ match }) => {
      return (
        <div>
          <h1>TOPICS</h1>
          <ul>
            {topics.map(({ name, id }) => {
              return (
                <li key={id}>
                  <Link to={`${match.url}/${id}`}>{name}</Link>
                </li>
              )
            })}
          </ul>

          <hr />

          <Route path={`${match.path}/:topicId`} component={Topic} />
        </div>
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
