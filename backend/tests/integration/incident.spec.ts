
import request from 'supertest'

import { app } from '../../src/app'
import { connection } from '../../src/database/connection'

describe('Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create a new incident', async () => {
    const { body: { id: ngoId } } = await request(app)
    .post('/ngos')
    .send({
      name: 'APAD',
      email: 'Contact@test.com',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC'
    })

    const response = await request(app)
    .post('/incidents')
    .send({
      title: 'title',
      description: 'description',
      value: 120,
    })
    .set('authorization', ngoId)

    expect(response.body).toHaveProperty('id')
  })

  it('should get incidents', async () => {
    const response = await request(app)
    .get('/incidents')

    expect(response.body).toEqual([])
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
    .get('/incidents')

    expect(response.body[0].id).toEqual(incidentId)
  })

  it('should create new incident and delete it', async () => {
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
    .delete(`/incidents/${incidentId}`)
    .set('authorization', ngoId)

    expect(response.status).toBe(204)
  })
})