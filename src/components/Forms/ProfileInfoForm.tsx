import React, { useState } from 'react'

import { Button, Input, Form } from '../index'

interface FormValues {
  name: string
  nin: string
  birthdate: string
  phone: string
  ecName: string
  ecPhone: string
  profilePicture: string
}

const initialValues: FormValues = {
  name: '',
  nin: '',
  birthdate: '',
  phone: '',
  ecName: '',
  ecPhone: '',
  profilePicture: '',
}

export const ProfileInfoForm: React.FC = () => {
  const [formValues, updateFormValues] = useState<FormValues>(initialValues)

  const handleSubmit = () => {
    console.log('next')
  }
  return (
    <Form>
      <Input
        name="name"
        type="text"
        placeholder=" "
        label="Name"
        onChange={(e) => updateFormValues({ ...formValues, name: e.currentTarget.value })}
      />
      <Input
        name="nin"
        type="text"
        placeholder=" "
        label="NIN"
        onChange={(e) => updateFormValues({ ...formValues, nin: e.currentTarget.value })}
      />
      <Input
        name="birthdate"
        type="date"
        placeholder=" "
        label="Birthdate"
        onChange={(e) =>
          updateFormValues({ ...formValues, birthdate: e.currentTarget.value })
        }
      />
      <Input
        name="phone"
        type="text"
        placeholder=" "
        label="Phone"
        onChange={(e) =>
          updateFormValues({ ...formValues, phone: e.currentTarget.value })
        }
      />
      <Input
        name="ecName"
        type="text"
        placeholder=" "
        label="EC Name"
        onChange={(e) =>
          updateFormValues({ ...formValues, ecName: e.currentTarget.value })
        }
      />
      <Input
        name="ecPhone"
        type="text"
        placeholder=" "
        label="EC Phone"
        onChange={(e) =>
          updateFormValues({ ...formValues, ecPhone: e.currentTarget.value })
        }
      />

      <Button>Next</Button>
    </Form>
  )
}
