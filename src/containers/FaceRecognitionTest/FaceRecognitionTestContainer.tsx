import React, { useState } from 'react'
import { Header, Heading, PageContainer, Sizes } from '../../components'
import { SelfieOnTest } from '../../components/SelfieOnTest/SelfieOnTest'
import { TestFooter } from '../../components/TestFooter/TestFooter'
import { LoadingBar } from '../../components/LoadingBar/LoadingBar'
import { IndividualTestProps } from '../../core/interfaces'
import {
  StyledFaceRecognitionTestSection,
  StyledUploadedImage,
} from './FaceRecognitionTestContainerStyles'

export const FaceRecognitionTestContainer: React.FC<IndividualTestProps> = ({
  onSuccess,
  current,
}) => {
  const [image, setImage] = useState(null)

  // when the image was loaded
  if (image) {
    setTimeout(() => {
      onSuccess(true)
    }, 3000)

    return (
      <PageContainer>
        <StyledUploadedImage
          style={{ backgroundImage: `url("${URL.createObjectURL(image)}")` }}
        />
        <LoadingBar />
        <TestFooter>{current + 1}. FR Test</TestFooter>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Header />

      <Heading size={Sizes.Large} title="PLEASE TAKE A CLEAR SELFIE" width={60} />

      <StyledFaceRecognitionTestSection>
        <SelfieOnTest
          setImage={(file: any) => {
            setImage(file)
          }}
        />
      </StyledFaceRecognitionTestSection>

      <TestFooter>{current + 1}. FR Test</TestFooter>
    </PageContainer>
  )
}
