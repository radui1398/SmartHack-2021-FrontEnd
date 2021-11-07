export interface IndividualTestProps {
  onSuccess: (result: boolean) => any
  current: number
}

export interface SingleTestInterface {
  name: string
  passed: boolean
}

export interface IndividualTestStateInterface {
  current: number
  failed: number
  tests: SingleTestInterface[]
}
