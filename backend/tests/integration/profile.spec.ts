
import request from 'supertest'

import { app } from '../../src/app'
import { connection } from '../../src/database/connection'

describe('Profile', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create new incident and get incidents', async () => {
    const { body: { id: ngoId } } = await request(app)
    .post('/ngos')
    .send({
      name: 'APAD',
      email: 'Contact@test.com',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC'
    })

    const { body: { id: incidentId } } = await request(app)
    .post('/incidents')
    .send({
      title: 'title',
      description: 'description',
      value: 120,
    })
    .set('authorization', ngoId)


    const response = await request(app)
    .get('/profile')
    .set('authorization', ngoId)

    expect(response.body[0].id).toEqual(incidentId)
  })
})