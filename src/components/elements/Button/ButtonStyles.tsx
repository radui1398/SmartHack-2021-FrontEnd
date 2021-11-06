import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledButton = styled(Button)`
  && {
    border-radius: 18px;
    padding: 8px 32px;
    color: ${theme.color.white};
    font: 400 16px/22px ${theme.font.secondary};
    background-color: ${theme.color.blue.main};
  }
`
