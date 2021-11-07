import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import {
  Header,
  PageContainer,
  ProfileInfoForm,
  ProfileTestsForm,
} from '../../components'

import {
  StyledCreateProfileBackCta,
  StyledCreateProfileHeader,
  StyledCreateProfileTitle,
} from './CreateProfilePageContainerStyles'
import { Routes } from '../../core/types'

type CreateProfileStep = 'profile-info' | 'profile-tests'

export const CreateProfilePageContainer: React.FC = () => {
  const [step, updateStep] = useState<CreateProfileStep>('profile-info')

  const title = step === 'profile-info' ? 'Setup your profile' : 'Medical checks'

  return (
    <PageContainer>
      <Header to={Routes.LANDING} />

      <StyledCreateProfileHeader>
        {step === 'profile-tests' && (
          <StyledCreateProfileBackCta onClick={() => updateStep('profile-info')}>
            <AiOutlineArrowLeft />
          </StyledCreateProfileBackCta>
        )}
        <StyledCreateProfileTitle>{title}</StyledCreateProfileTitle>
      </StyledCreateProfileHeader>
      {step === 'profile-info' ? (
        <ProfileInfoForm action={() => updateStep('profile-tests')} />
      ) : (
        <ProfileTestsForm />
      )}
    </PageContainer>
  )
}
