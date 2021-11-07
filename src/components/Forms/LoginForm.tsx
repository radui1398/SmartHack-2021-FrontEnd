import React, { FormEvent, useState } from 'react'
import { Button, Form, Input, Spinner } from '..'
import { Routes } from '../../core/types'
import { useHistory } from 'react-router-dom'

interface Props {
  getProfile(nin: string): void
}

export const LoginForm: React.FC<Props> = ({ getProfile }: Props) => {
  const [nin, updateNin] = useState<string>('')
  const [isLoading, updateIsLoading] = useState<boolean>(false)
  const router = useHistory()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    updateIsLoading(true)
    await getProfile(nin)
    updateIsLoading(false)

    router.push(Routes.DASHBOARD)
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
