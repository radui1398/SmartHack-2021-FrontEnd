import { theme } from '../../globalStyle'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

export const StyledLoadingBar = styled(LinearProgress)<{ v: string }>`
  height: 10px !important;
  border-radius: 5px;
  background-color: ${(props) =>
    props.v === 'red' ? theme.color.red['200'] : theme.color.blue['200']} !important;

  .MuiLinearProgress-barColorPrimary {
    background-color: ${(props) =>
      props.v === 'red' ? theme.color.red.main : theme.color.blue.main};
  }
`

export const StyledLoadingBarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 90%;
  left: 5%;
  bottom: 70px;
`
