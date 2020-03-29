import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { Incident } from './entities/Incident'

class ProfileService {
  private readonly httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:3333'
    })
  }

  public async getIncidentsByProfile(): Promise<Incident[]> {
    const response: AxiosResponse = await this.httpClient.get<Incident[]>('profile', {
      headers: {
        Authorization: localStorage.getItem('NGO_ID')
      }
    })

    return response.data
  }
}

export { ProfileService }
