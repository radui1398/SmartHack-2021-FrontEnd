import React, { useState } from 'react'
import { FaceRecognitionTestContainer } from '../../containers'

interface initialStateInterface {
  current: number
  tests: [any]
}

const initialState: initialStateInterface = {
  current: 0,
  tests: [
    {
      name: 'Face Recognition',
      passed: false,
    },
  ],
}

export const AVCPage: React.FC = () => {
  const [structure, setStructure] = useState(initialState)

  if (structure.current >= structure.tests.length) return <p>Results</p>

  const handleNext = (result: boolean) => {
    const newStructure = { ...structure }
    newStructure.tests[structure.current].passed = result
    newStructure.current = structure.current + 1
    setStructure(newStructure)
  }

  switch (structure.current) {
    default:
    case 1:
      return (
        <FaceRecognitionTestContainer
          current={structure.current}
          onSuccess={(result) => {
            handleNext(result)
          }}
        />
      )
  }
}
