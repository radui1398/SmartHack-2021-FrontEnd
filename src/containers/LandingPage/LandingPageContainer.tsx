import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Routes } from '../../core/types'

import {
  Button,
  Heading,
  PageContainer,
  PageLinker,
  EmergencyCta,
  Sizes,
} from '../../components'
import {
  StyledLandingPageSection,
  StyledPlatformDescriptionWrapper,
} from './LandingPageContainerStyles'
import { landingPageMock } from '../../mocks'

const { description, secondDescription } = landingPageMock

export const LandingPageContainer: React.FC = () => {
  const history = useHistory()
  return (
    <PageContainer>
      <Heading title="Welcome" size={Sizes.Small} width={40} />
      <StyledLandingPageSection>
        <Link to={Routes.CREATE_PROFILE}>
          <Button>Create your Profile</Button>
        </Link>
      </StyledLandingPageSection>
      <StyledLandingPageSection>
        <StyledPlatformDescriptionWrapper>
          <div>{description}</div>
          <div>{secondDescription}</div>
        </StyledPlatformDescriptionWrapper>
      </StyledLandingPageSection>
      <StyledLandingPageSection>
        <EmergencyCta
          handleClick={() => {
            history.push(Routes.HELP)
          }}
        />
      </StyledLandingPageSection>
      <StyledLandingPageSection>
        <PageLinker path="/login" label="Login" width={40} />
      </StyledLandingPageSection>
    </PageContainer>
  )
}
