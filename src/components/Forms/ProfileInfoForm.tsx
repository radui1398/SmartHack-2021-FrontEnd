import React, { useState } from 'react'
import { MdAddAPhoto } from 'react-icons/md'

import { Button, Input, Form, ImageUpload } from '..'
import {
  StyledImageUploadIcon,
  StyledUploadedImageOnForm,
} from '../elements/Form/FormStyles'

interface Props {
  action: () => void
}

interface FormValues {
  fullName: string
  nin: string
  birthday: string
  phoneNumber: string
  ecName: string
  ecPhoneNumber: string
  picture: string
}

const initialValues: FormValues = {
  fullName: '',
  nin: '',
  birthday: '',
  phoneNumber: '',
  ecName: '',
  ecPhoneNumber: '',
  picture: '',
}

export const ProfileInfoForm: React.FC<Props> = ({ action }: Props) => {
  const [formValues, updateFormValues] = useState<FormValues>(initialValues)
  const [image, setImage] = useState<File | null>(null)
  const isValid = Object.values(formValues).every(Boolean)

  console.log(image)

  const handleSubmit = () => {
    localStorage.setItem('createProfileReq', JSON.stringify(formValues))

    if (action) {
      action()
    }
  }

  const renderImageUploader = () => {
    if (image) {
      return (
        <ImageUpload
          onPhotoTake={(data) => {
            updateFormValues({ ...formValues, picture: data.b64 })
            setImage(data.file)
          }}
        >
          <StyledImageUploadIcon>
            <span>Change picture</span>
            <StyledUploadedImageOnForm src={URL.createObjectURL(image)} />
          </StyledImageUploadIcon>
        </ImageUpload>
      )
    }

    return (
      <ImageUpload
        onPhotoTake={(data) => {
          updateFormValues({ ...formValues, picture: data.b64 })
          setImage(data.file)
        }}
      >
        <StyledImageUploadIcon>
          <span>Take a picture</span>
          <span>
            <MdAddAPhoto />
          </span>
        </StyledImageUploadIcon>
      </ImageUpload>
    )
  }

  return (
    <Form>
      <Input
        name="fullName"
        type="text"
        placeholder=" "
        label="Name"
        onChange={(e) =>
          updateFormValues({ ...formValues, fullName: e.currentTarget.value })
        }
      />
      <Input
        name="nin"
        type="text"
        placeholder=" "
        label="NIN"
        onChange={(e) => updateFormValues({ ...formValues, nin: e.currentTarget.value })}
      />
      <Input
        name="birthday"
        type="date"
        placeholder=" "
        label="Birthdate"
        onChange={(e) =>
          updateFormValues({ ...formValues, birthday: e.currentTarget.value })
        }
      />
      <Input
        name="phoneNumber"
        type="text"
        placeholder=" "
        label="Phone"
        onChange={(e) =>
          updateFormValues({ ...formValues, phoneNumber: e.currentTarget.value })
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
        name="ecPhoneNumber"
        type="text"
        placeholder=" "
        label="EC Phone"
        onChange={(e) =>
          updateFormValues({ ...formValues, ecPhoneNumber: e.currentTarget.value })
        }
      />
      {renderImageUploader()}

      <Button disabled={!isValid} onClick={handleSubmit}>
        Next
      </Button>
    </Form>
  )
}
