import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { LoginResponse } from './entities/LoginResponse'

class SessionService {
  private readonly httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:3333'
    })
  }

  public async login(id: string): Promise<LoginResponse> {
    const response: AxiosResponse = await this.httpClient.post<LoginResponse>('session', { id })

    return response.data
  }
}

export { SessionService }
