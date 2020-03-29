
import request from 'supertest'

import { app } from '../../src/app'
import { connection } from '../../src/database/connection'

describe('Session', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should login', async () => {
    const name = 'APAD'

    const { body: { id: ngoId } } = await request(app)
    .post('/ngos')
    .send({
      name,
      email: 'Contact@test.com',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC'
    })

    const response = await request(app)
    .post('/sessions')
    .send({
      id: ngoId
    })

    expect(response.body.name).toBe(name)
  })

  it('should not login', async () => {
    const ngoId = 'ngoId'

    const response = await request(app)
    .post('/sessions')
    .send({
      id: ngoId
    })

    expect(response.status).toBe(400)
  })
})