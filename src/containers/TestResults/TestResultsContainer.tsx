import React from 'react'
import { Header, Heading, PageContainer, PageLinker } from '../../components'
import { SingleTestInterface } from '../../core/interfaces'
import { Routes } from '../../core/types'
import {
  StyledResultList,
  StyledResultItem,
  StyledResultText,
  StyledResultExit,
} from './TestResultsContainerStyles'

interface Props {
  tests: SingleTestInterface[]
}

const renderItems = (tests: SingleTestInterface[]) => {
  return tests.map((test, index) => (
    <StyledResultItem passed={test.passed} key={test.name}>
      {index + 1}. {test.name}
    </StyledResultItem>
  ))
}

export const TestResultsContainer: React.FC<Props> = ({ tests }) => {
  const totalPassed = tests.reduce((total, current) => {
    return total + (current.passed ? 1 : 0)
  }, 0)

  return (
    <PageContainer>
      <Header />
      <Heading title="FINAL RESULTS" width={40} />
      <StyledResultList>{renderItems(tests)}</StyledResultList>

      <StyledResultText>
        {totalPassed} out of {tests.length} tests passed
      </StyledResultText>

      <StyledResultExit>
        <PageLinker path={Routes.DASHBOARD} label="Exit" width={40} />
      </StyledResultExit>
    </PageContainer>
  )
}
