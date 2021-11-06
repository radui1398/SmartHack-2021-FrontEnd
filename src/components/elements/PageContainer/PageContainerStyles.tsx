import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 48px;

  @media ${theme.queries.tablet} {
    padding: 32px;
  }
`
