import React from 'react'

import { SpinnerRing, SpinnerWrapper } from './SpinnerStyles'

export const Spinner: React.FC = () => (
  <SpinnerWrapper>
    <SpinnerRing />
    <SpinnerRing />
    <SpinnerRing />
    <SpinnerRing />
  </SpinnerWrapper>
)
