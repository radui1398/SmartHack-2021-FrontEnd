import React, { useState } from 'react'
// @ts-ignore
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { theme } from '../../globalStyle'

import {
  StyledRecButtonLabel,
  StyledRecButtonText,
  StyledRecButtonWrapper,
} from './RecButtonStyles'

interface Props {
  onRecord: (data: any) => void
}

export const RecButton: React.FC<Props> = ({ onRecord }) => {
  const [recordState, setRecordState] = useState<RecordState>(null)

  const handleStop = (data: any) => {
    onRecord(data)
  }

  const handleClick = () => {
    if (recordState === RecordState.START) {
      setRecordState(RecordState.STOP)
    } else {
      setRecordState(RecordState.START)
    }
  }

  return (
    <>
      <StyledRecButtonWrapper>
        <StyledRecButtonText onClick={handleClick}>
          <span>{recordState === RecordState.START ? 'STOP' : 'REC'}</span>
        </StyledRecButtonText>
        <StyledRecButtonLabel>
          {recordState === RecordState.START ? 'RECORDING...' : 'PRESS TO REC'}
        </StyledRecButtonLabel>
      </StyledRecButtonWrapper>

      <AudioReactRecorder
        canvasWidth={100}
        canvasHeight={60}
        backgroundColor={theme.color.white}
        foregroundColor={theme.color.blue.main}
        state={recordState}
        onStop={handleStop}
      />
    </>
  )
}
