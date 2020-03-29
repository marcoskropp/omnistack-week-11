import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { StoreIncidentRequest } from './entities/StoreIncidentRequest'
import { GetIncidentResponse } from './entities/GetIncidentResponse'
import { IncidentResponse } from './entities/IncidentResponse'

class IncidentService {
  private readonly httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:3333'
    })
  }

  public async getIncidents(page: number): Promise<GetIncidentResponse> {
    const response: AxiosResponse = await this.httpClient.get<IncidentResponse>('incidents', { params: { page } })

    return new GetIncidentResponse({
      incidents: response.data,
      total: response.headers['x-total-count']
    })
  }

  public async storeIncident(data: StoreIncidentRequest): Promise<void> {
    await this.httpClient.post('incidents', data, {
      headers: {
        Authorization: localStorage.getItem('NGO_ID')
      }
    })
  }

  public async deleteIncident(id: number): Promise<void> {
    await this.httpClient.delete(`incidents/${id}`, {
      headers: {
        Authorization: localStorage.getItem('NGO_ID')
      }
    })
  }
}

export { IncidentService }
