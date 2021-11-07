import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'

import { Button, Form } from '..'
import { medicalChecksMock } from '../../mocks/MedicalChecks'

export const ProfileTestsForm: React.FC = () => {
  const [medicalChecks, updateMedicalChecks] = useState<string[]>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log('submit')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!medicalChecks.find((check) => check === e.target.name) && e.target.checked) {
      updateMedicalChecks([...medicalChecks, e.target.name])
    } else {
      updateMedicalChecks(medicalChecks.filter((check) => check !== e.target.name))
    }
  }

  return (
    <Form>
      <FormGroup>
        {medicalChecksMock.map((medicalCheck: string) => (
          <FormControlLabel
            key={medicalCheck}
            control={
              <Checkbox
                checked={!!medicalChecks.find((item) => item === medicalCheck)}
                onChange={handleChange}
                name={medicalCheck}
                color="primary"
              />
            }
            label={medicalCheck}
          />
        ))}
      </FormGroup>
      <Button disabled={medicalChecks.length === 0} onClick={handleSubmit}>
        Save
      </Button>
    </Form>
  )
}
