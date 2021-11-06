import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from '../core/types'
import { LandingPage } from '../pages/landing'
import { AVCPage } from '../pages/avc'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.LANDING}>
        <LandingPage />
      </Route>
      <Route exact path={Routes.AVC}>
        <AVCPage />
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
      <Route path={Routes.TEST} />
    </Switch>
  </BrowserRouter>
)
