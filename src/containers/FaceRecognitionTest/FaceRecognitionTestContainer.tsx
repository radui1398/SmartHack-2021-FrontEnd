import React, { useState } from 'react'
import { Header, Heading, PageContainer, Sizes, TestFooter } from '../../components'
import { SelfieOnTest } from '../../components/SelfieOnTest/SelfieOnTest'
import { LoadingBar } from '../../components/LoadingBar/LoadingBar'
import { IndividualTestProps } from '../../core/interfaces'
import {
  StyledFaceRecognitionTestSection,
  StyledUploadedImage,
} from './FaceRecognitionTestContainerStyles'
import { Context } from '../../Context'
import { useCookies } from 'react-cookie'

export const FaceRecognitionTestContainer: React.FC<IndividualTestProps> = ({
  onSuccess,
  current,
}) => {
  const [image, setImage] = useState(null)
  const [b64, updateB64] = useState(null)
  const [cookies] = useCookies()

  // when the image was loaded
  if (image && b64) {
    Context.apiService
      .faceRecognition({
        nin: cookies.nin,
        picture: b64,
      })
      .then((result) => {
        if (result.message !== 'AVC reasons discovered.') {
          onSuccess(true)
        } else {
          onSuccess(false)
        }
      })
      .catch((error) => {
        console.log(error)
        onSuccess(false)
      })

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
          setB64={(b64: any) => {
            updateB64(b64)
          }}
          setImage={(file: any) => {
            setImage(file)
          }}
        />
      </StyledFaceRecognitionTestSection>

      <TestFooter>{current + 1}. FR Test</TestFooter>
    </PageContainer>
  )
}
