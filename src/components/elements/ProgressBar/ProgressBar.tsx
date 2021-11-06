import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'
import { theme } from '../../../globalStyle'

TopBarProgress.config({
  barColors: {
    '0': theme.color.blue['700'],
    '1.0': theme.color.blue['700'],
  },
  shadowBlur: 5,
})

interface Props {
  show: boolean
}

export const ProgressBar: React.FC<Props> = ({ show }) => (
  <div>{show && <TopBarProgress />}</div>
)
