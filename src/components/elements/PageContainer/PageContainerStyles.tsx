import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledPageContainer = styled.div`
  padding: 48px;

  @media ${theme.queries.tablet} {
    padding: 32px;
  }
`
