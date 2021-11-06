import React from 'react'
import { ImageUpload } from '..'
import { StyledSelfieOnTest } from './SelfieOnTestStyles'

interface Props {
  setImage: (image: any) => void
}

export const SelfieOnTest: React.FC<Props> = ({ setImage }) => (
  <StyledSelfieOnTest>
    <ImageUpload
      onPhotoTake={(data) => {
        setImage(data.file)
      }}
    >
      <div className="camera-wrap">
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65.1663 53.8333C65.1663 55.3362 64.5693 56.7776 63.5066 57.8403C62.4439 58.903 61.0026 59.5 59.4997 59.5H8.49967C6.99678 59.5 5.55544 58.903 4.49274 57.8403C3.43003 56.7776 2.83301 55.3362 2.83301 53.8333V22.6667C2.83301 21.1638 3.43003 19.7224 4.49274 18.6597C5.55544 17.597 6.99678 17 8.49967 17H19.833L25.4997 8.5H42.4997L48.1663 17H59.4997C61.0026 17 62.4439 17.597 63.5066 18.6597C64.5693 19.7224 65.1663 21.1638 65.1663 22.6667V53.8333Z"
            stroke="white"
          />
          <path
            d="M34.0003 48.1667C40.2596 48.1667 45.3337 43.0926 45.3337 36.8333C45.3337 30.5741 40.2596 25.5 34.0003 25.5C27.7411 25.5 22.667 30.5741 22.667 36.8333C22.667 43.0926 27.7411 48.1667 34.0003 48.1667Z"
            stroke="white"
          />
        </svg>
      </div>
    </ImageUpload>

    <p>PRESS TO TAKE PHOTO</p>
  </StyledSelfieOnTest>
)
