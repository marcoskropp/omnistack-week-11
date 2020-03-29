import { IncidentResponse } from './IncidentResponse'

class GetIncidentResponse {
  total !: number

  incidents !: IncidentResponse[]

  constructor(response: GetIncidentResponse) {
    this.total = response.total
    this.incidents = response.incidents
  }
}

export { GetIncidentResponse }
