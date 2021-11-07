import React from 'react'
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
  StyledDashboardPageSection,
  StyledDashboardLink,
  StyledDashboardSecondsHeading,
  StyledDashboardPicture,
} from './DashboardPageContainerStyles'
import { Profile } from '../../core/domain'

interface StateProps {
  profile: Profile
}

interface DispatchProps {
  getProfile(nin: string): void
}

type Props = StateProps & DispatchProps

export const DashboardPageContainer: React.FC<Props> = ({
  profile,
  getProfile,
}: Props) => {
  const history = useHistory()

  return (
    <PageContainer>
      <Header />

      <StyledDashboardPicture src={profile.picture} />

      <Heading title="YOUR MEDICAL CHECKS" size={Sizes.Small} width={60} />

      <StyledDashboardLink
        onClick={() => {
          history.push(Routes.AVC)
        }}
      >
        <span>AVC CHECK</span>
      </StyledDashboardLink>

      <StyledDashboardLink
        onClick={() => {
          history.push(Routes.AVC)
        }}
      >
        <span>CANCER CHECK</span>
      </StyledDashboardLink>

      <StyledDashboardSecondsHeading>
        <Heading title="OR MAKE A SINGLE TEST" size={Sizes.Small} width={60} />
      </StyledDashboardSecondsHeading>

      <StyledDashboardLink
        onClick={() => {
          history.push(Routes.TESTS)
        }}
      >
        <span>VIEW TESTS</span>
      </StyledDashboardLink>

      <StyledDashboardPageSection>
        <EmergencyCta
          handleClick={() => {
            history.push(Routes.HELP)
          }}
        />
      </StyledDashboardPageSection>

      <StyledDashboardPageSection>
        <PageLinker path={Routes.CREATE_PROFILE} label="UPDATE YOUR PROFILE" width={60} />
      </StyledDashboardPageSection>
    </PageContainer>
  )
}
