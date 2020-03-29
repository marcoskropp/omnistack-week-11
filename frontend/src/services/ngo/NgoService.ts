import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { Ngo } from './entities/Ngo'
import { StoreNgoRequest } from './entities/StoreNgoRequest'
import { StoreNgoResponse } from './entities/StoreNgoResponse'

class NgoService {
  private readonly httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:3333'
    })
  }

  public async getNgos(): Promise<Ngo[]> {
    const response: AxiosResponse = await this.httpClient.get<Ngo[]>('ngos')

    return response.data
  }

  public async storeNgo(data: StoreNgoRequest): Promise<StoreNgoResponse> {
    const response: AxiosResponse = await this.httpClient.post<StoreNgoResponse>('ngos', data, {
      headers: {
        Authorization: localStorage.getItem('NGO_ID')
      }
    })

    return response.data
  }
}

export { NgoService }
