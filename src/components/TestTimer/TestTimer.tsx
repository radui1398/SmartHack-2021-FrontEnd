import React, { MouseEvent } from 'react'

import { StyledTestTimer } from './TestTimerStyles'

interface Props {
  seconds: number
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void
}

export const TestTimer: React.FC<Props> = ({ seconds, onClick }) => (
  <StyledTestTimer onClick={onClick}>{seconds}s</StyledTestTimer>
)
