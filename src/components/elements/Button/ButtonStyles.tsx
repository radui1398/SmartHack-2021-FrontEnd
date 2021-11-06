import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid ${theme.color.blue.main};
  border-radius: 24px;
  padding: 24px 48px;
  color: ${theme.color.white};
  font: 400 16px/18px ${theme.font.secondary};
  text-transform: uppercase;
  background-color: ${theme.color.blue.main};

  &:hover {
    border: 1px solid ${theme.color.blue.main};
    color: ${theme.color.blue.main};
    background-color: ${theme.color.white};
  }
`
