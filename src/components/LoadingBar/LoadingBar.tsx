import React from 'react'
import { StyledLoadingBar, StyledLoadingBarContainer } from './LoadingBarStyles'

export enum Variants {
  BLUE = 'blue',
  RED = 'red',
}

interface Props {
  variant?: Variants
}

export const LoadingBar: React.FC<Props> = ({ variant = Variants.BLUE }) => {
  return (
    <StyledLoadingBarContainer>
      <StyledLoadingBar v={variant} />
    </StyledLoadingBarContainer>
  )
}
