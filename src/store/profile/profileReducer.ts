import { InitialStateActionType, SetInitialStateAction } from '../setInitialStateAction'

import { Profile } from '../../core/domain'

import { GetProfileSuccessAction, ProfileActionsType } from './profileActions'

type ActionType = SetInitialStateAction | GetProfileSuccessAction

export const initialState = {
  nin: '',
  medicalChecks: [],
  ecPhoneNumber: '',
  ecName: '',
  phoneNumber: '',
  birthday: '',
  fullName: '',
  picture: '',
}

export const profileReducer = (
  profile: Profile = initialState,
  action: ActionType
): any => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState
    case ProfileActionsType.GET_PROFILE_SUCCESS:
      return action.payload.profile
    default:
      return profile
  }
}
