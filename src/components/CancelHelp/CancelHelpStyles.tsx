import styled from 'styled-components'
import { Button } from '../elements/Button/Button'
import { theme } from '../../globalStyle'

export const StyledCancelHelpButton: any = styled(Button)`
  width: 100%;
  padding: 16px 24px;
  margin-top: 30px;
  background-color: ${theme.color.red.main};
  border: none;
  user-select: none;
  margin-bottom: 80px;

  &:hover {
    background-color: ${theme.color.red.main};
    border: none;
    color: white;
  }
`
