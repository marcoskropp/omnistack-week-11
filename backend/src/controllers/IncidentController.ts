import { Request, Response } from 'express'

import { connection } from '../database/connection'

class IncidentController {
  public async index (request: Request, response: Response): Promise<Response> {
    const { page = 1 } = request.query

    const [count] = await connection('incidents').count()

    const incidents = await connection('incidents')
      .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ngos.name',
        'ngos.email',
        'ngos.whatsapp',
        'ngos.city',
        'ngos.uf'
      ])

    response.header('X-Total-Count', count['count(*)'])

    return response.json(incidents)
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const { title, description, value } = request.body
    const ngo_id = request.headers.authorization

    const [id] = await connection('incidents').insert({
      title, description, value, ngo_id
    })

    return response.json({ id })
  }

  public async delete (request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params
    const ngo_id = request.headers.authorization

    const incident = await connection('incidents')
      .where('id', id)
      .select('ngo_id')
      .first()

    if (incident.ngo_id !== ngo_id) {
      return response.status(401).json({ error: 'Operation not permitted' })
    }

    await connection('incidents').where('id', id).delete()

    return response.status(204).send()
  }
}

export { IncidentController }