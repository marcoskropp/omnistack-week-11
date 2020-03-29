import { Request, Response } from 'express'

import { connection } from '../database/connection'

class ProfileController {
  async index(request: Request, response: Response): Promise<Response> {
    const ngo_id = request.headers.authorization
  
    const incidents = await connection('incidents')
      .where('ngo_id', ngo_id)
      .select('*')
      
    return response.json(incidents)
  }
}

export { ProfileController }