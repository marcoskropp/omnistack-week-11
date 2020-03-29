import { Request, Response } from 'express'

import { connection } from '../database/connection'

class SessionController {
  async create(request: Request, response: Response): Promise<Response> {

    const { id } = request.body

    const ngo = await connection('ngos')
      .where('id', id)
      .select('name')
      .first()

      if(!ngo) {
        return response.status(400).json({ error: 'No NGO found with this ID' })
      }

      return response.json(ngo)
  }
}

export { SessionController }
