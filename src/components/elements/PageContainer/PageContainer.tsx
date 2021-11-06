import React from 'react'
import { StyledPageContainer } from './PageContainerStyles'

interface Props {
  children?: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({ children }: Props) => (
  <StyledPageContainer>{children}</StyledPageContainer>
)
