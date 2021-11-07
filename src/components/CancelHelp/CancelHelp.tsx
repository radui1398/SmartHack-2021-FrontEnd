import React from 'react'
import { StyledCancelHelpButton } from './CancelHelpStyles'
import { useHistory } from 'react-router-dom'
import { Routes } from '../../core/types'

export const CancelHelp: React.FC = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(Routes.DASHBOARD)
  }

  return <StyledCancelHelpButton onClick={handleClick}>CANCEL</StyledCancelHelpButton>
}
