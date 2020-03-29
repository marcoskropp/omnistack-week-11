
import request from 'supertest'

import { app } from '../../src/app'
import { connection } from '../../src/database/connection'

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create a new NGO', async () => {
    const response = await request(app)
    .post('/ngos')
    .send({
      name: 'APAD',
      email: 'Contact@test.com',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC'
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })

  it('should get NGOs', async () => {
    const response = await request(app)
    .get('/ngos')

    expect(response.body).toEqual([])
  })

  it('should create new NGO and get NGOs', async () => {
    const { body: { id } } = await request(app)
    .post('/ngos')
    .send({
      name: 'APAD',
      email: 'Contact@test.com',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC'
    })

    const response = await request(app)
    .get('/ngos')

    expect(response.body[0].id).toEqual(id)
  })
})