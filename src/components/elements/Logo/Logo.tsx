import React from 'react'
import { ReactComponent as HealthCheckLogo } from '../../../assets/images/healthcheck-logo.svg'
import { StyledLogo } from './LogoStyles'

export const Logo: React.FC<{ onClick: any }> = ({ onClick }) => (
  <StyledLogo onClick={onClick}>
    <HealthCheckLogo />
  </StyledLogo>
)
