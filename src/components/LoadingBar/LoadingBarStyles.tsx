import { theme } from '../../globalStyle'
import { LinearProgress, withStyles } from '@material-ui/core'
import styled from 'styled-components'

export const StyledLoadingBar = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.color.gray.secondary,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.color.blue.main,
  },
}))(LinearProgress)

export const StyledLoadingBarContainer = styled.div`
  position: absolute;
  z-index: 1000;
  width: 90%;
  left: 5%;
  bottom: 70px;
`
