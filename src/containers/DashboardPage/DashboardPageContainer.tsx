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

export const DashboardPageContainer: React.FC = () => {
  const history = useHistory()

  return (
    <PageContainer>
      <Header />

      <StyledDashboardPicture src="https://scontent.fias1-1.fna.fbcdn.net/v/t1.6435-9/47323740_10217016646598690_6963395593280421888_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3y5S4d4pYOEAX-Txs9O&_nc_ht=scontent.fias1-1.fna&oh=597e4eeb02b4220f1123140917e945b1&oe=61AB7A85" />

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
