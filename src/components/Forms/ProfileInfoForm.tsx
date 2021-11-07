import React, { useState } from 'react'
import { MdAddAPhoto } from 'react-icons/md'

import { Button, Input, Form, ImageUpload } from '..'
import { StyledImageUploadIcon } from '../elements/Form/FormStyles'

interface Props {
  action: () => void
}

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

export const ProfileInfoForm: React.FC<Props> = ({ action }: Props) => {
  const [formValues, updateFormValues] = useState<FormValues>(initialValues)
  const isValid = Object.values(formValues).every(Boolean)

  const handleSubmit = () => {
    if (action) {
      action()
    }
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
      <ImageUpload
        onPhotoTake={(data) =>
          updateFormValues({ ...formValues, profilePicture: data.b64 })
        }
      >
        <StyledImageUploadIcon>
          <span>Take a picture</span>
          <span>
            <MdAddAPhoto />
          </span>
        </StyledImageUploadIcon>
      </ImageUpload>
      <Button disabled={!isValid} onClick={handleSubmit}>
        Next
      </Button>
    </Form>
  )
}
