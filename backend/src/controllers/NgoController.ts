import { Request, Response } from 'express'

import { connection } from '../database/connection'
import { generateUniqueId } from '../utils/generateUniqueId'

class NgoController {
  async index(request: Request, response: Response): Promise<Response> {
    const ngos = await connection('ngos').select('*')
  
    return response.json(ngos)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, whatsapp, city, uf } = request.body

    const id = generateUniqueId()
  
    await connection('ngos').insert({
      id, name, email, whatsapp, city, uf
    })
  
    return response.json({ id })
  }
}

export { NgoController }
