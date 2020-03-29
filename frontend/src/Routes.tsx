import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { LogonFactory } from './pages/Logon/LogonFactory'
import { RegisterFactory } from './pages/Register/RegisterFactory'
import { ProfileFactory } from './pages/Profile/ProfileFactory'
import { NewIncidentFactory } from './pages/NewIncident/NewIncidentFactory'

import './global.css'

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={(): ReactElement => LogonFactory.build()} />
      <Route path="/register" component={(): ReactElement => RegisterFactory.build()} />
      <Route path="/profile" component={(): ReactElement => ProfileFactory.build()} />
      <Route path="/incidents/new" component={(): ReactElement => NewIncidentFactory.build()} />
    </Switch>
  </BrowserRouter>
)

export { Routes }
