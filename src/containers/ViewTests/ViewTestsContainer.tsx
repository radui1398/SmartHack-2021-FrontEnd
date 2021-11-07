import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Routes } from '../../core/types'
import {
  Heading,
  PageContainer,
  PageLinker,
  EmergencyCta,
  Sizes,
  Header,
} from '../../components'
import {
  StyledViewTestsLink,
  StyledViewTestsPageSection,
} from './ViewTestsContainerStyles'
import { FaceRecognitionTestContainer } from '../FaceRecognitionTest/FaceRecognitionTestContainer'
import { ArmsTestContainer } from '../ArmsTest/ArmsTestContainer'
import { TimerTestContainer } from '../TimerTest/TimerTestContainer'
import { AudioTest } from '../AudioTest/AudioTest'
import { TestResultsContainer } from '../TestResults/TestResultsContainer'

export const ViewTestsPageContainer: React.FC = () => {
  const [test, setTest] = useState<null | string>(null)
  const [result, setResult] = useState<null | boolean>(null)
  const history = useHistory()

  if (result !== null && test !== null) {
    return <TestResultsContainer tests={[{ name: test, passed: result }]} />
  }

  switch (test) {
    case 'Face Recognition':
      return (
        <FaceRecognitionTestContainer
          onSuccess={(result) => {
            setResult(result)
          }}
          current={0}
        />
      )

    case 'Arms Test':
      return (
        <ArmsTestContainer
          onSuccess={(result) => {
            setResult(result)
          }}
          current={0}
        />
      )

    case 'Timer Test':
      return (
        <TimerTestContainer
          onSuccess={(result) => {
            setResult(result)
          }}
          current={0}
        />
      )

    case 'Speech Recognition':
      return (
        <AudioTest
          onSuccess={(result) => {
            setResult(result)
          }}
          current={0}
        />
      )
  }

  return (
    <PageContainer>
      <Header />

      <Heading title="SINGLE TESTS" size={Sizes.Small} width={60} />

      <StyledViewTestsLink
        onClick={() => {
          setTest('Face Recognition')
        }}
      >
        <span>Face Recognition</span>
      </StyledViewTestsLink>

      <StyledViewTestsLink
        onClick={() => {
          setTest('Arms Test')
        }}
      >
        <span>Arms Test</span>
      </StyledViewTestsLink>

      <StyledViewTestsLink
        onClick={() => {
          setTest('Speech Recognition')
        }}
      >
        <span>Speech Recognition</span>
      </StyledViewTestsLink>

      <StyledViewTestsLink
        onClick={() => {
          setTest('Timer Test')
        }}
      >
        <span>Timer Test</span>
      </StyledViewTestsLink>

      <StyledViewTestsPageSection>
        <EmergencyCta
          handleClick={() => {
            history.push(Routes.HELP)
          }}
        />
      </StyledViewTestsPageSection>

      <StyledViewTestsPageSection>
        <PageLinker path={Routes.DASHBOARD} label="DASHBOARD" width={60} />
      </StyledViewTestsPageSection>
    </PageContainer>
  )
}
