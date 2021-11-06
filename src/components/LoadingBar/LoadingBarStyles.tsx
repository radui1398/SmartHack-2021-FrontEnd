import { theme } from '../../globalStyle'
import { LinearProgress, withStyles } from '@material-ui/core'

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
