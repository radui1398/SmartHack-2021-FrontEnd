import { AnyAction } from 'redux'

export type ProgressState = number

const initialState: ProgressState = 0

export const progressReducer = (
  state: ProgressState = initialState,
  action: AnyAction
): ProgressState => {
  switch (action.type) {
    case 'DA':
      return state + 1
    case 'NU':
      return state - 1

    default:
      return state
  }
}
