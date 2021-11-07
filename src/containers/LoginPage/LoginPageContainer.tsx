import React from 'react'
import { Header, Heading, LoginForm, PageContainer } from '../../components'

export const LoginPageContainer: React.FC = () => (
  <PageContainer>
    <Header />
    <Heading title="USE YOUR NATIONAL IDENTIFICATION NUMBER TO LOGIN BACK" width={60} />
    <LoginForm />
  </PageContainer>
)
