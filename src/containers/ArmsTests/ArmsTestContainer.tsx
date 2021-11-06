import React from 'react'
import { Heading, PageContainer, Sizes } from '../../components'

import { TestFooter } from '../../components/TestFooter/TestFooter'

export const ArmsTestContainer: React.FC = () => {
  return (
    <PageContainer>
      <Heading size={Sizes.Large} title="PLEASE TAKE A CLEAR SELFIE" width={60} />

      <TestFooter>2. Arms Test</TestFooter>
    </PageContainer>
  )
}