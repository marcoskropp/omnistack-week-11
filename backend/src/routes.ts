import { Router } from 'express'

import { NgoController } from './controllers/NgoController'
import { IncidentController } from './controllers/IncidentController'
import { ProfileController} from './controllers/ProfileController'
import { SessionController } from './controllers/SessionController'

import { 
  ngoCreateParams, 
  sessionCreateParams,
  profileIndexParams,
  incidentsIndexParams,
  incidentsCreateParams,
  incidentsDeleteParams
 } from './routeParams'

const routes = Router()

const ngoController = new NgoController()
const incidentController = new IncidentController()
const profileController = new ProfileController()
const sessionController = new SessionController()

routes.post('/session', sessionCreateParams, sessionController.create)

routes.get('/ngos', ngoController.index)
routes.post('/ngos', ngoCreateParams, ngoController.create)

routes.get('/profile', profileIndexParams, profileController.index)

routes.get('/incidents', incidentsIndexParams, incidentController.index)
routes.post('/incidents', incidentsCreateParams, incidentController.create)

routes.delete('/incidents/:id', incidentsDeleteParams, incidentController.delete)

export { routes }


