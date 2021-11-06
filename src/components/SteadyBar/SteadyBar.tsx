import React, { useEffect, useState } from 'react'
import { useDeviceOrientation } from '../../core/hooks/useDeviceOrientation'
import { makeStyles } from '@material-ui/core'
import { theme } from '../../globalStyle'

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  bar: {
    width: '60%',
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

export const SteadyBar: React.FC = () => {
  const { orientation, requestAccess } = useDeviceOrientation()
  const [sensorsAllowed, setSensorsAllowed] = useState(false)
  const [degrees, setDegrees] = useState(180)
  const classes = useStyles()

  if (!sensorsAllowed) {
    requestAccess()
      .then(() => {
        setSensorsAllowed(true)
        console.log('sensors initialized')
      })
      .catch((error) => console.log('Err: ' + error))
  }

  useEffect(() => {
    if (orientation?.beta) {
      setDegrees(orientation.beta)
    }
  }, [orientation])

  const steady = degrees > 0 ? 180 - degrees < 5 : 180 + degrees < 5

  if (orientation?.absolute) {
    setDegrees(degrees * -1)
  }

  return (
    <div className={classes.container}>
      <div className={classes.center} />
      <div
        className={classes.bar}
        style={{
          transform: `rotateZ(${degrees}deg)`,
          backgroundColor: steady ? theme.color.green.main : theme.color.red.main,
        }}
      />
    </div>
  )
}
