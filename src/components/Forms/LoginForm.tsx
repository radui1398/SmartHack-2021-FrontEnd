import React, { FormEvent, useState } from 'react'
import { Button, Form, Input } from '..'

export const LoginForm: React.FC = () => {
  const [nin, updateNin] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(nin)
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
        Login
      </Button>
    </Form>
  )
}
