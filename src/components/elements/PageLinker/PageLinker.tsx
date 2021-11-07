import React from 'react'
import { StyledPageLinker } from './PageLinkerStyles'
import { Heading } from '../Heading/Heading'
import { Link } from 'react-router-dom'

interface Props {
  path: string
  label?: string
  width?: number
}

export const PageLinker: React.FC<Props> = ({ path, label = '', width = 60 }: Props) => (
  <StyledPageLinker>
    <Link to={path}>
      <Heading title={label} width={width} />
    </Link>
  </StyledPageLinker>
)
