import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledHeading = styled.h5`
  width: 100%;
  text-align: center;
  color: ${theme.color.gray.main};
  font: 400 14px/24px ${theme.font.primary};
  border-bottom: 1px solid ${theme.color.gray.main};
  line-height: 1.8px;
  text-transform: uppercase;

  span {
    background: ${theme.color.white};
    padding: 0 32px;
  }
`
