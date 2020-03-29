import { celebrate, Segments, Joi } from 'celebrate'

const sessionCreateParams = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required().length(8)
  })
})

const ngoCreateParams = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
})

const profileIndexParams = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
})

const incidentsIndexParams = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
})

const incidentsCreateParams = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
})

const incidentsDeleteParams = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  })
})

export { 
  sessionCreateParams, 
  ngoCreateParams, 
  profileIndexParams, 
  incidentsIndexParams,
  incidentsCreateParams,
  incidentsDeleteParams
}