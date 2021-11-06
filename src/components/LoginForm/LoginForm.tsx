import React, { useState } from 'react'
import { StyledLoginForm } from './LoginFormStyles'
import { TextField } from '@material-ui/core'
import { Button } from '../elements/Button/Button'

export const LoginForm: React.FC = () => {
  const [nin, updateNin] = useState<string>('')

  const handleSubmit = () => {
    console.log()
  }

  return (
    <StyledLoginForm>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <Button>Login</Button>
    </StyledLoginForm>
  )
}
