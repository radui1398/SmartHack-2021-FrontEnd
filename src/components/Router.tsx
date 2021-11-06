import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from '../core/types'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.LANDING}>
        <div>Landing</div>
      </Route>
      <Route path={Routes.DASHBOARD}>
        <div>Dashboard</div>
      </Route>
      <Route path={Routes.PROFILE}>
        <div>Profile</div>
      </Route>
      <Route path={Routes.LOGIN}>
        <div>Login</div>
      </Route>
    </Switch>
  </BrowserRouter>
)
