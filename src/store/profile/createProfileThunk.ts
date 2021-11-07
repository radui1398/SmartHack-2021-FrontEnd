import { CreateProfileReq } from '../../core/services'
import { Result, resultFormatter } from '../../core/types'
import {
  createProfileAction,
  createProfileErrorAction,
  createProfileSuccessAction,
} from './profileActions'
import { Context } from '../../Context'
import { Dispatch } from 'react'

export const createProfileThunk =
  (req: CreateProfileReq) =>
  async (dispatch: Dispatch<any>): Promise<Result<void, string>> => {
    try {
      dispatch(createProfileAction())

      await Context.apiService.updateProfile(req)

      dispatch(createProfileSuccessAction())

      await Context.alertService.fire({
        title: 'Success',
        text: 'Profile Created with Success',
        showCloseButton: true,
        icon: 'success',
      })

      return resultFormatter.ok<void, string>()
    } catch (error: any) {
      dispatch(createProfileErrorAction(error))

      await Context.alertService.fire({
        title: 'Oops...',
        text: 'There was an error creating the profile',
        showCloseButton: true,
        icon: 'error',
      })

      return resultFormatter.error<void, string>(error)
    }
  }
