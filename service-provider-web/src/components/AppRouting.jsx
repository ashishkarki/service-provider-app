import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from '../pages/Error'
import Home from '../pages/Home'
import SkillsSelection from '../pages/SkillsSelection'
import { ROUTING_PATHS } from '../constants'
import AppNavigation from './AppNavigation'
import SkillsRating from '../pages/SkillsRating'
import ServiceRequests from '../pages/ServiceRequests'

const AppRouting = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTING_PATHS.HOME_ROOT}>
          <Home />
        </Route>

        <Route path={ROUTING_PATHS.SKILLS_SELECTION}>
          <SkillsSelection />
        </Route>

        <Route path={ROUTING_PATHS.SKILLS_RATING}>
          <SkillsRating />
        </Route>

        <Route path={ROUTING_PATHS.SERVICE_REQUESTS}>
          <ServiceRequests />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>

      <AppNavigation />
    </Router>
  )
}

export default AppRouting
