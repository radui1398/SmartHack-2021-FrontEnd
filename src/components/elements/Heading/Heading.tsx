import React from 'react'
import { StyledHeading } from './HeadingStyles'

export enum Sizes {
  Small = 14,
  Large = 20,
}

interface Props {
  title: string
  size?: Sizes
  width: number
}

export const Heading: React.FC<Props> = ({ title, width, size = Sizes.Small }: Props) => (
  <StyledHeading size={size} width={width}>
    <span>{title}</span>
  </StyledHeading>
)
