export interface Profile {
  readonly nin: string
  readonly medicalChecks: string[]
  readonly ecPhoneNumber: string
  readonly ecName: string
  readonly phoneNumber: string
  readonly birthday: string
  readonly fullName: string
  readonly picture: string
}

export interface RecognitionResult {
  readonly passed: boolean
}

export interface FaceRecognitionResult {
  readonly passed: boolean
  readonly message: string
}
