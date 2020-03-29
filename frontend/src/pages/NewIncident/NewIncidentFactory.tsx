import React, { ReactElement } from 'react'

import { NewIncident } from './NewIncident'

import { IncidentService } from '~/services/incident/IncidentService'

class NewIncidentFactory {
  public static build(): ReactElement {
    return (
      <NewIncident
        incidentService={new IncidentService()}
      />
    )
  }
}

export { NewIncidentFactory }
