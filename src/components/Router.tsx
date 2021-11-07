import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from '../core/types'
import {
  LoginPage,
  LandingPage,
  CreateProfilePage,
  AVCPage,
  Help,
  DashboardPage,
  ViewTestsPage,
} from '../pages'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.LANDING}>
        <LandingPage />
      </Route>
      <Route exact path={Routes.AVC}>
        <AVCPage />
      </Route>
      <Route exact path={Routes.HELP}>
        <Help />
      </Route>
      <Route exact path={Routes.TESTS}>
        <ViewTestsPage />
      </Route>
      <Route path={Routes.DASHBOARD}>
        <DashboardPage />
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
