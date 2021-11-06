import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from '../core/types'
import { LoginPage, LandingPage, CreateProfilePage } from '../pages'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.LANDING}>
        <LandingPage />
      </Route>
      <Route path={Routes.DASHBOARD}>
        <div>Dashboard</div>
      </Route>
      <Route path={Routes.CREATE_PROFILE}>
        <CreateProfilePage />
      </Route>
      <Route path={Routes.LOGIN}>
        <LoginPage />
      </Route>
    </Switch>
  </BrowserRouter>
)
