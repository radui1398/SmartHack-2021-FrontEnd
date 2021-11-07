import { ProgressState } from './progress/progressReducer'
import { Profile } from '../core/domain'

export interface AppState {
  progress: ProgressState
  profile: Profile
}
