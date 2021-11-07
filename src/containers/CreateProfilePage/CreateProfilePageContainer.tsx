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
import { CreateProfileReq } from '../../core/services'
import { createProfileThunk } from '../../store/profile/createProfileThunk'
import { AppState } from '../../store'
import { connect } from 'react-redux'

interface DispatchProps {
  createProfile(req: CreateProfileReq): void
}

type CreateProfileStep = 'profile-info' | 'profile-tests'

const UnconnectedCreateProfilePageContainer: React.FC<DispatchProps> = ({
  createProfile,
}: DispatchProps) => {
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
        <ProfileTestsForm createProfile={createProfile} />
      )}
    </PageContainer>
  )
}

const mapDispatchToProps: DispatchProps = {
  createProfile: createProfileThunk,
}

const mapStateToProps = ({}: AppState) => ({})

export const CreateProfilePageContainer = connect<{}, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateProfilePageContainer)
