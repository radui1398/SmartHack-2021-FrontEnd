import React from 'react'
import { StyledLoadingBar, StyledLoadingBarContainer } from './LoadingBarStyles'

export const LoadingBar: React.FC = () => {
  return (
    <StyledLoadingBarContainer>
      <StyledLoadingBar />
    </StyledLoadingBarContainer>
  )
}
