import React, { ReactElement } from 'react'

import { Profile } from './Profile'

import { ProfileService } from '~/services/profile/ProfileService'
import { IncidentService } from '~/services/incident/IncidentService'

class ProfileFactory {
  public static build(): ReactElement {
    return (
      <Profile
        profileService={new ProfileService()}
        incidentService={new IncidentService()}
      />
    )
  }
}

export { ProfileFactory }
