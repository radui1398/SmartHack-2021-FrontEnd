import React from 'react'
import {
  StyledAlertButtonLabel,
  StyledAlertIconText,
  StyledAlertIconWrapper,
} from './AlertIconStyles'

export const AlertIcon: React.FC = () => {
  return (
    <>
      <StyledAlertIconWrapper>
        <StyledAlertIconText>
          <span>!</span>
        </StyledAlertIconText>
        <StyledAlertButtonLabel>
          Medical help is coming at your location. Please remain calm and wait for the
          medical help to arrive!
        </StyledAlertButtonLabel>
      </StyledAlertIconWrapper>
    </>
  )
}
