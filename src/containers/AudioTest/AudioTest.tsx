import React, { useState } from 'react'
import { Heading, PageContainer, RecButton, Sizes } from '../../components'
import { TestFooter } from '../../components/TestFooter/TestFooter'
import { IndividualTestProps } from '../../core/interfaces'
import { StyledMessageToRepeat } from './AudioTestStyles'
import { LoadingBar } from '../../components/LoadingBar/LoadingBar'

export const AudioTest: React.FC<IndividualTestProps> = ({ onSuccess, current }) => {
  const [loading, setLoading] = useState(false)

  const handleAudioRecord = (data: any) => {
    console.log(data)
    setLoading(true)
    setTimeout(() => {
      onSuccess(true)
    }, 5000)
  }

  if (loading) {
    return (
      <PageContainer>
        <Heading size={Sizes.Large} title="THE MESSAGE IS PROCESSED" width={40} />

        <LoadingBar />

        <TestFooter>{current + 1}. Speech Recognition</TestFooter>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Heading size={Sizes.Large} title="REPEAT THE MESSAGE" width={40} />

      <StyledMessageToRepeat>
        A shady fish is swimming in the ocean.
      </StyledMessageToRepeat>

      <RecButton onRecord={handleAudioRecord} />

      <TestFooter>{current + 1}. Speech Recognition</TestFooter>
    </PageContainer>
  )
}
