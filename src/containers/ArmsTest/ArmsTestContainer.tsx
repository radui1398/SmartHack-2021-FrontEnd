import React, { useEffect, useRef, useState } from 'react'
import { Heading, PageContainer, Sizes, SteadyBar } from '../../components'
import { TestFooter } from '../../components/TestFooter/TestFooter'
import { StyledSteadyWrapper } from './ArmsTestContainerStyles'
import { LoadingBar } from '../../components/LoadingBar/LoadingBar'
import { IndividualTestProps } from '../../core/interfaces'

export const ArmsTestContainer: React.FC<IndividualTestProps> = ({
  onSuccess,
  current,
}) => {
  const [currentSteady, setSteady] = useState(false)
  const steadyRef = useRef(currentSteady)
  steadyRef.current = currentSteady

  const handleOnSteadyChange = async (steady: boolean) => {
    if (currentSteady !== steady) await setSteady(steady)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onSuccess(steadyRef.current)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <PageContainer>
      <Heading size={Sizes.Large} title="KEEP THE LINE STEADY" width={60} />
      <StyledSteadyWrapper>
        <SteadyBar onSteadyChange={handleOnSteadyChange} currentSteady={currentSteady} />
      </StyledSteadyWrapper>
      <LoadingBar />
      <TestFooter>{current + 1}. Arms Test</TestFooter>
    </PageContainer>
  )
}
