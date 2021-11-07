import { ApiService, CreateProfileReq } from '../core/services'
import { AxiosService } from './AxiosService'
import { API_KEY, BASE_URL } from '../utils/configuration'
import { Profile } from '../core/domain'

export class HttpApiService implements ApiService {
  private axiosInstance: AxiosService

  constructor() {
    this.axiosInstance = new AxiosService({
      baseURL: `https://${BASE_URL}/app`,
      headers: {
        apiKey: `${API_KEY}`,
      },
    })
  }

  getProfile(nin: string): Promise<Profile> {
    return this.axiosInstance.post<{ nin: string }, Profile>('/users/login', { nin })
  }

  updateProfile(req: CreateProfileReq): Promise<void> {
    return this.axiosInstance.put<CreateProfileReq, void>('/users/register', req)
  }
}
