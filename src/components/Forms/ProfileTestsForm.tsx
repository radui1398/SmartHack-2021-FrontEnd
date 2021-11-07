import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'

import { Button, Form, Spinner } from '..'
import { medicalChecksMock } from '../../mocks/MedicalChecks'
import { CreateProfileReq } from '../../core/services'
import { Routes } from '../../core/types'
import { useHistory } from 'react-router-dom'

interface Props {
  createProfile(req: CreateProfileReq): void
}

export const ProfileTestsForm: React.FC<Props> = ({ createProfile }: Props) => {
  const [medicalChecks, updateMedicalChecks] = useState<string[]>([])
  const [isLoading, updateIsLoading] = useState<boolean>(false)
  const router = useHistory()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    updateIsLoading(true)

    const createProfileReq = JSON.parse(localStorage.getItem('createProfileReq') || '')

    await createProfile({ ...createProfileReq, medicalChecks })

    updateIsLoading(false)

    router.push(Routes.LOGIN)
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
        {isLoading ? <Spinner /> : 'Save'}
      </Button>
    </Form>
  )
}
