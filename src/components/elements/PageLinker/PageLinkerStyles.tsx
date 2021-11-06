import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledPageLinker = styled.div`
  cursor: pointer;
  text-align: center;
  color: ${theme.color.gray.main};
  font: 400 14px/24px ${theme.font.tertiary};
  text-transform: uppercase;

  a {
    background: ${theme.color.white};
    padding: 0 32px;
    text-decoration: underline ${theme.color.gray.main};
    color: ${theme.color.gray.main};
  }
`
export const StyledPageLinkerDelim = styled.span`
  border-bottom: 0.5px solid ${theme.color.gray.main};
  min-width: 100%;
`
