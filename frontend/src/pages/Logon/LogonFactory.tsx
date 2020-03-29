import React, { ReactElement } from 'react'

import { Logon } from './Logon'

import { SessionService } from '~/services/session/SessionService'

class LogonFactory {
  public static build(): ReactElement {
    return (
      <Logon
        sessionService={new SessionService()}
      />
    )
  }
}

export { LogonFactory }
