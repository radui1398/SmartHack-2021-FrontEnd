import React from 'react'
import {
  Button,
  Heading,
  PageContainer,
  PageLinker,
  EmergencyCta,
} from '../../components'
import {
  StyledLandingPageSection,
  StyledPlatformDescriptionWrapper,
} from './LandingPageContainerStyles'
import { landingPageMock } from '../../mocks'

const { description, secondDescription } = landingPageMock

export const LandingPageContainer: React.FC = () => (
  <PageContainer>
    <Heading title="Welcome" />
    <StyledLandingPageSection>
      <Button>Create your Profile</Button>
    </StyledLandingPageSection>
    <StyledLandingPageSection>
      <StyledPlatformDescriptionWrapper>
        <div>{description}</div>
        <div>{secondDescription}</div>
      </StyledPlatformDescriptionWrapper>
    </StyledLandingPageSection>
    <StyledLandingPageSection>
      <EmergencyCta handleClick={() => console.log('Emergency Call')} />
    </StyledLandingPageSection>
    <StyledLandingPageSection>
      <PageLinker path="/login" label="Login" />
    </StyledLandingPageSection>
  </PageContainer>
)
