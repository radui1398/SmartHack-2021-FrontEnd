import React, { useEffect, useState } from 'react'
import { LoadingBar, Variants } from '../../components/LoadingBar/LoadingBar'
import { AlertIcon, CancelHelp, PageContainer, TestFooter } from '../../components'

export const HelpPageContainer: React.FC = () => {
  const [secondsToDecrease, setSecondsToDecrease] = useState(0)

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (secondsToDecrease < 30) {
        setSecondsToDecrease(secondsToDecrease + 1)
      }
      if (secondsToDecrease === 30) {
        clearInterval(myInterval)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <PageContainer>
      <AlertIcon />
      <CancelHelp />
      <LoadingBar variant={Variants.RED} />
      <TestFooter>HELP IS COMING</TestFooter>
    </PageContainer>
  )
}
