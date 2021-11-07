import { Dispatch } from 'react'
import { Result, resultFormatter } from '../../core/types'
import {
  getProfileAction,
  getProfileErrorAction,
  getProfileSuccessAction,
} from './profileActions'
import { Context } from '../../Context'

export const getProfileThunk =
  (nin: string) =>
  async (dispatch: Dispatch<any>): Promise<Result<void, string>> => {
    try {
      dispatch(getProfileAction())

      const profile = await Context.apiService.getProfile(nin)

      dispatch(getProfileSuccessAction(profile))

      return resultFormatter.ok<void, string>()
    } catch (error: any) {
      dispatch(getProfileErrorAction(error))

      await Context.alertService.fire({
        title: 'Oops...',
        text: 'Profile not found',
        showCloseButton: true,
        icon: 'error',
      })

      return resultFormatter.error<void, string>(error)
    }
  }
