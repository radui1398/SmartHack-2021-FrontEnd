import React from 'react'
import { StyledForm } from './FormStyles'

interface Props {
  children?: React.ReactNode
}

export const Form: React.FC = ({ children }: Props) => <StyledForm>{children}</StyledForm>
