import React, { useState } from 'react'
import { Heading, PageContainer, Sizes } from '../../components'
import {
  StyledFaceRecognitionTestSection,
  StyledUploadedImage,
  StyledLoadingBarContainer,
} from './FaceRecognitionTestContainerStyles'
import { SelfieOnTest } from '../../components/SelfieOnTest/SelfieOnTest'
import { TestFooter } from '../../components/TestFooter/TestFooter'
import { LoadingBar } from '../../components/LoadingBar/LoadingBar'

interface Props {
  onSuccess: (result: boolean) => any
  current: number
}

export const FaceRecognitionTestContainer: React.FC<Props> = ({ onSuccess, current }) => {
  const [image, setImage] = useState(null)

  if (image) {
    setTimeout(() => {
      onSuccess(true)
    }, 3000)

    return (
      <PageContainer>
        <StyledUploadedImage
          style={{ backgroundImage: `url("${URL.createObjectURL(image)}")` }}
        />
        <StyledLoadingBarContainer>
          <LoadingBar />
        </StyledLoadingBarContainer>
        <TestFooter>{current} FR Test</TestFooter>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Heading size={Sizes.Large} title="PLEASE TAKE A CLEAR SELFIE" width={60} />

      <StyledFaceRecognitionTestSection>
        <SelfieOnTest
          setImage={(file: any) => {
            setImage(file)
          }}
        />
      </StyledFaceRecognitionTestSection>

      <TestFooter>{current} FR Test</TestFooter>
    </PageContainer>
  )
}
