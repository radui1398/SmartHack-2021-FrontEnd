import React, { useState } from 'react'
import {
  ArmsTestContainer,
  FaceRecognitionTestContainer,
  TestResultsContainer,
} from '../../containers'
import { IndividualTestStateInterface } from '../../core/interfaces'

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
  ],
}

export const AVCPage: React.FC = () => {
  const [structure, setStructure] = useState(initialState)

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
    default:
      return <p>Never happening!</p>
  }
}
