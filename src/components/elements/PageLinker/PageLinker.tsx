import React from 'react'
import { StyledPageLinker } from './PageLinkerStyles'

interface Props {
  path: string
  label?: string
}

export const PageLinker: React.FC<Props> = ({ path, label }: Props) => (
  <StyledPageLinker>
    <a href={path}>{label}</a>
  </StyledPageLinker>
)
