import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import SkillsSelection from './pages/SkillsSelection'
import { ROUTING_PATHS } from './constants'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTING_PATHS.HOME_ROOT}>
          <Home />
        </Route>

        <Route path={ROUTING_PATHS.SKILLS_SELECTION}>
          <SkillsSelection />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing
