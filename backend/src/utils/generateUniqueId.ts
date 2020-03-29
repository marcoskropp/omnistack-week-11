import { randomBytes } from 'crypto'

const generateUniqueId = (): string => {
  return randomBytes(4).toString('HEX')
}

export { generateUniqueId }
