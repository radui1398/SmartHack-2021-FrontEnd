import React, { useEffect, useState, MouseEvent } from 'react'
import { Heading, PageContainer, Sizes, TestTimer } from '../../components'
import { TestFooter } from '../../components/TestFooter/TestFooter'
import { LoadingBar } from '../../components/LoadingBar/LoadingBar'
import { IndividualTestProps } from '../../core/interfaces'

export const TimerTestContainer: React.FC<IndividualTestProps> = ({
  onSuccess,
  current,
}) => {
  const [secondsToDecrease, setSecondsToDecrease] = useState(0)

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (secondsToDecrease < 30) {
        setSecondsToDecrease(secondsToDecrease + 1)
      }
      if (secondsToDecrease === 30) {
        clearInterval(myInterval)
        onSuccess(false)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onSuccess(true)
  }

  return (
    <PageContainer>
      <Heading
        size={Sizes.Large}
        title="PRESS THE BUTTON BEFORE THE TIME RUNS OUT"
        width={60}
      />
      <TestTimer seconds={30 - secondsToDecrease} onClick={handleOnClick} />
      <LoadingBar />
      <TestFooter>{current + 1}. Timer Test</TestFooter>
    </PageContainer>
  )
}
