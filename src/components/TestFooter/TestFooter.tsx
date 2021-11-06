import React from 'react'

import { StyledTestFooter } from './TestFooterStyles'

interface Props {
  children: any
}

export const TestFooter: React.FC<Props> = ({ children }) => (
  <StyledTestFooter>{children}</StyledTestFooter>
)
