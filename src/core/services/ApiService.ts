import { Profile } from '../domain'

export interface CreateProfileReq {
  readonly fullName: string
  readonly ecName: string
  readonly ecPhoneNumber: string
  readonly birthday: string
  readonly nin: string
  readonly phoneNumber: string
  readonly picture: string
  readonly medicalChecks: string[]
}

export interface ApiService {
  getProfile: (nin: string) => Promise<Profile>

  updateProfile: (req: CreateProfileReq) => Promise<void>
}