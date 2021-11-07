import React from 'react'
import { StyledPageLinker } from './PageLinkerStyles'
import { Heading } from '../Heading/Heading'

interface Props {
  path: string
  label?: string
  width?: number
}

export const PageLinker: React.FC<Props> = ({ path, label = '', width = 60 }: Props) => (
  <StyledPageLinker>
    <a href={path}>
      <Heading title={label} width={width} />
    </a>
  </StyledPageLinker>
)
