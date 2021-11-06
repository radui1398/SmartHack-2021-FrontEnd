import React, { ChangeEvent, ReactElement } from 'react'

interface Props {
  onPhotoTake: (data: String) => void
  children: string | ReactElement
}

export const ImageUpload: React.FC<Props> = (props: Props) => {
  const handlePhotoTaken = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files?.[0]) {
      return
    }

    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function () {
      if (typeof reader.result !== 'string') {
        return
      }

      const result = reader?.result?.split(',')[1]
      props.onPhotoTake(result)
    }

    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <div>
      <label htmlFor="image-upload">{props.children}</label>
      <input
        id="image-upload"
        type="file"
        name="image"
        accept="image/*"
        capture="user"
        style={{ display: 'none' }}
        onChange={handlePhotoTaken}
      />
    </div>
  )
}
