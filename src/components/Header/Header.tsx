import React from 'react'

import { Logo } from '..'

import { StyledHeader } from './HeaderStyles'
import { useHistory } from 'react-router-dom'
import { Routes } from '../../core/types'

interface Props {
  to?: string
}

export const Header: React.FC<Props> = ({ to = Routes.DASHBOARD }) => {
  const history = useHistory()

  return (
    <StyledHeader>
      <Logo
        onClick={() => {
          history.push(to)
        }}
      />
    </StyledHeader>
  )
}
