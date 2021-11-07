import React, { FormEvent, useState } from 'react'
import { Button, Form, Input, Spinner } from '..'
import { Context } from '../../Context'

interface Props {
  getProfile(nin: string): void
}

export const LoginForm: React.FC<Props> = ({ getProfile }: Props) => {
  const [nin, updateNin] = useState<string>('')
  const [isLoading, updateIsLoading] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updateIsLoading(true)
    getProfile(nin)
    updateIsLoading(false)
  }

  return (
    <Form>
      <Input
        name="nin"
        type="text"
        placeholder=" "
        label="NIN"
        onChange={(e) => updateNin(e.currentTarget.value)}
      />
      <Button onClick={handleSubmit} disabled={!nin}>
        {isLoading ? <Spinner /> : 'Login'}
      </Button>
    </Form>
  )
}
