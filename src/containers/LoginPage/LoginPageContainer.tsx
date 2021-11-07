import React from 'react'
import { Heading, LoginForm, PageContainer } from '../../components'
import { getProfileThunk } from '../../store/profile/getProfileThunk'
import { connect } from 'react-redux'
import { AppState } from '../../store'

interface DispatchProps {
  getProfile(nin: string): void
}

const UnconnectedLoginPageContainer: React.FC<DispatchProps> = ({
  getProfile,
}: DispatchProps) => (
  <PageContainer>
    <Heading title="USE YOUR NATIONAL IDENTIFICATION NUMBER TO LOGIN BACK" width={60} />
    <LoginForm getProfile={getProfile} />
  </PageContainer>
)

const mapDispatchToProps: DispatchProps = {
  getProfile: getProfileThunk,
}

const mapStateToProps = ({}: AppState) => ({})

export const LoginPageContainer = connect<{}, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLoginPageContainer)
