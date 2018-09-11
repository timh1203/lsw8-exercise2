import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import topics from './data/topics'

class App extends Component {
  render() {
    const Home = () => {
      return (
        <h1>HOME</h1>
      )
    }

    const Resource = ({ match }) => {
      const resource = topics.find(({ id }) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId)

      return (
        <div>
          <h3>{resource.name}</h3>
          <p>{resource.description}</p>
          <a href={resource.url}>More info.</a>
        </div>
      )
    }

    const Topic = ({ match }) => {
      const topic = topics.find(({ id }) => id === match.params.topicId)

      return (
        <div>
          <h1>{topic.name}</h1>
          <h2>{topic.description}</h2>
          <ul>
            {topic.resources.map(topic => {
              return (
                <li key={topic.id}>
                  <Link to={`${match.url}/${topic.id}`}>{topic.name}</Link>
                </li>
              )
            })}
          </ul>

          <hr />

          <Route path={`${match.path}/:subId`} component={Resource} />
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
