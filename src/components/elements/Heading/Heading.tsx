import React from 'react'
import { StyledHeading } from './HeadingStyles'

interface Props {
  title: string
}

export const Heading: React.FC<Props> = ({ title }: Props) => (
  <StyledHeading>
    <span>{title}</span>
  </StyledHeading>
)
