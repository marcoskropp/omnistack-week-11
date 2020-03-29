import React, { ReactElement } from 'react'

import { Register } from './Register'

import { NgoService } from '~/services/ngo/NgoService'

class RegisterFactory {
  public static build(): ReactElement {
    return (
      <Register
        ngoService={new NgoService()}
      />
    )
  }
}

export { RegisterFactory }
