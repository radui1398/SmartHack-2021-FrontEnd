import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

export class AxiosService {
  private readonly _apiConfig: AxiosRequestConfig
  private _AXIOS: AxiosInstance

  constructor(apiConfig: AxiosRequestConfig) {
    this._apiConfig = apiConfig
    this._AXIOS = createAxiosInstance(this._apiConfig)
  }

  async get<P, R>(urlPath: string, params?: P, config?: AxiosRequestConfig): Promise<R> {
    try {
      const axiosResponse: AxiosResponse<R> = await this._AXIOS.get<R>(urlPath, {
        ...config,
        params,
      })
      return axiosResponse.data
    } catch (error: any) {
      handleErrors(error)
      throw error
    }
  }

  async post<B, R>(urlPath: string, body: B, config?: AxiosRequestConfig): Promise<R> {
    try {
      const axiosResponse: AxiosResponse<R> = await this._AXIOS.post<R>(
        urlPath,
        body,
        config
      )

      return axiosResponse.data
    } catch (error: any) {
      handleErrors(error)
      throw error
    }
  }

  async patch<B, R>(urlPath: string, body: B, config?: AxiosRequestConfig): Promise<R> {
    try {
      const axiosResponse: AxiosResponse<R> = await this._AXIOS.patch<R>(
        urlPath,
        body,
        config
      )

      return axiosResponse.data
    } catch (error: any) {
      handleErrors(error)
      throw error
    }
  }

  async put<B, R>(urlPath: string, body: B, config?: AxiosRequestConfig): Promise<R> {
    try {
      const axiosResponse: AxiosResponse<R> = await this._AXIOS.put<R>(
        urlPath,
        body,
        config
      )

      return axiosResponse.data
    } catch (error: any) {
      handleErrors(error)
      throw error
    }
  }

  async delete<P, R>(
    urlPath: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      const axiosResponse: AxiosResponse<R> = await this._AXIOS.delete<R>(urlPath, {
        ...config,
        params,
      })

      return axiosResponse.data
    } catch (error: any) {
      handleErrors(error)
      throw error
    }
  }
}

function createAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
  return axios.create(apiConfig)
}

function handleErrors(error: AxiosError): void {
  if (error.response) {
    console.error(error.response.data)
    console.error(error.response.status)
    console.error(error.response.headers)
  } else if (error.request) {
    console.error(error.request)
  } else {
    console.error('Api Core Error', error.message)
  }

  console.error(error.config)
}
