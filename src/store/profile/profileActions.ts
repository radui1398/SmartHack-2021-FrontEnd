import { Action } from 'redux'
import { Profile } from '../../core/domain'

export enum ProfileActionsType {
  GET_PROFILE = 'GET_PROFILE',
  GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
  GET_PROFILE_ERROR = 'GET_PROFILE_ERROR',
  CREATE_PROFILE = 'CREATE_PROFILE',
  CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS',
  CREATE_PROFILE_ERROR = 'CREATE_PROFILE_ERROR',
}

export interface GetProfileAction extends Action {
  type: ProfileActionsType.GET_PROFILE
}

export interface GetProfileSuccessAction extends Action {
  type: ProfileActionsType.GET_PROFILE_SUCCESS
  payload: {
    profile: Profile
  }
}

export interface GetProfileErrorAction extends Action {
  type: ProfileActionsType.GET_PROFILE_ERROR
  payload: {
    error: Error
  }
}

export interface CreateProfileAction extends Action {
  type: ProfileActionsType.CREATE_PROFILE
}

export interface CreateProfileSuccessAction extends Action {
  type: ProfileActionsType.CREATE_PROFILE_SUCCESS
}

export interface CreateProfileErrorAction extends Action {
  type: ProfileActionsType.CREATE_PROFILE_ERROR
  payload: {
    error: Error
  }
}

export const getProfileAction = (): GetProfileAction => ({
  type: ProfileActionsType.GET_PROFILE,
})

export const getProfileSuccessAction = (profile: Profile): GetProfileSuccessAction => ({
  type: ProfileActionsType.GET_PROFILE_SUCCESS,
  payload: {
    profile,
  },
})

export const getProfileErrorAction = (error: Error): GetProfileErrorAction => ({
  type: ProfileActionsType.GET_PROFILE_ERROR,
  payload: {
    error,
  },
})

export const createProfileAction = (): CreateProfileAction => ({
  type: ProfileActionsType.CREATE_PROFILE,
})

export const createProfileSuccessAction = (): CreateProfileSuccessAction => ({
  type: ProfileActionsType.CREATE_PROFILE_SUCCESS,
})

export const createProfileErrorAction = (error: Error): CreateProfileErrorAction => ({
  type: ProfileActionsType.CREATE_PROFILE_ERROR,
  payload: {
    error,
  },
})
