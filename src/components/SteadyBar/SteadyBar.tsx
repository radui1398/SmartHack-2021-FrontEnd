import React, { useEffect, useState } from 'react'
import { useDeviceOrientation } from '../../core/hooks/useDeviceOrientation'
import { makeStyles } from '@material-ui/core'
import { theme } from '../../globalStyle'
import { StyledSteadyGreenBar } from './SteadyBarStyles'

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  bar: {
    width: 200,
    height: 6,
  },
  center: {
    height: 55,
    width: 6,
    backgroundColor: theme.color.black,
    position: 'absolute',
    left: 'calc(50% - 6px)',
    top: 0,
    zIndex: 1,
  },
}))

interface Props {
  onSteadyChange: (steady: boolean) => any
  currentSteady: boolean
}

export const SteadyBar: React.FC<Props> = ({ onSteadyChange, currentSteady }) => {
  const { orientation, requestAccess } = useDeviceOrientation()
  const [sensorsAllowed, setSensorsAllowed] = useState(false)
  const [degrees, setDegrees] = useState(180)
  const classes = useStyles()
  let steady = false

  if (!sensorsAllowed) {
    requestAccess()
      .then(() => {
        setSensorsAllowed(true)
        console.log('sensors initialized')
      })
      .catch((error) => console.error('Err: ' + error))
  }

  if ((degrees > 0 && degrees < 5) || degrees > 175) {
    steady = true
  }

  if ((degrees < 0 && degrees > -5) || degrees < -175) {
    steady = true
  }

  useEffect(() => {
    if (
      orientation?.beta &&
      (Math.abs(degrees) - Math.abs(orientation.beta) > 0.5 ||
        Math.abs(orientation.beta) - Math.abs(degrees))
    ) {
      setDegrees(orientation.beta)
    }

    if (sensorsAllowed && orientation && currentSteady !== steady) {
      onSteadyChange(steady)
    }
  }, [orientation])

  return (
    <div className={classes.container}>
      <div className={classes.center} />
      <StyledSteadyGreenBar steady={steady} degrees={degrees} />
    </div>
  )
}
