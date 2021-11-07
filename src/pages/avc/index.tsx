import React, { useState } from 'react'
import { IndividualTestStateInterface } from '../../core/interfaces'
import {
  ArmsTestContainer,
  FaceRecognitionTestContainer,
  TestResultsContainer,
  TimerTestContainer,
} from '../../containers'
import { AudioTest } from '../../containers/AudioTest/AudioTest'
import { useHistory } from 'react-router-dom'

const initialState: IndividualTestStateInterface = {
  current: 0,
  failed: 0,
  tests: [
    {
      name: 'Face Recognition',
      passed: false,
    },
    {
      name: 'Arms Test',
      passed: false,
    },
    {
      name: 'Timer Test',
      passed: false,
    },
    {
      name: 'Speech Recognition',
      passed: false,
    },
  ],
}

export const AVCPage: React.FC = () => {
  const [structure, setStructure] = useState(initialState)
  const history = useHistory()

  // when help is needed
  if (structure.failed > 1) {
    history.push('/help')
    return null
  }

  // when results must be displayed
  if (structure.current >= structure.tests.length) {
    return <TestResultsContainer tests={structure.tests} />
  }

  // fn to go to next test and save the result
  const handleNext = async (result: boolean) => {
    const newStructure = { ...structure }
    newStructure.tests[structure.current].passed = result
    newStructure.current = structure.current + 1
    newStructure.failed = structure.failed + (result ? 0 : 1)
    await setStructure(newStructure)
  }

  // switch to choose the right test
  // the default case should never happen
  const renderTest = () => {
    switch (structure.current) {
      case 0:
        return (
          <FaceRecognitionTestContainer
            current={structure.current}
            onSuccess={handleNext}
          />
        )
      case 1:
        return <ArmsTestContainer onSuccess={handleNext} current={structure.current} />
      case 2:
        return <TimerTestContainer onSuccess={handleNext} current={structure.current} />
      case 3:
        return <AudioTest onSuccess={handleNext} current={structure.current} />
      default:
        return <></>
    }
  }

  return <div style={{ paddingBottom: '50px' }}>{renderTest()}</div>
}
