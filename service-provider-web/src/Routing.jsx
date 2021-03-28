import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing
