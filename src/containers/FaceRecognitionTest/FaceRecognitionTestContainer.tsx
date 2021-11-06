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

export const FaceRecognitionTestContainer: React.FC = () => {
  const [image, setImage] = useState(null)

  if (image) {
    return (
      <PageContainer>
        <StyledUploadedImage
          style={{ backgroundImage: `url("${URL.createObjectURL(image)}")` }}
        />
        <StyledLoadingBarContainer>
          <LoadingBar />
        </StyledLoadingBarContainer>
        <TestFooter>Loading Results</TestFooter>
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

      <TestFooter>Face Recognition</TestFooter>
    </PageContainer>
  )
}
