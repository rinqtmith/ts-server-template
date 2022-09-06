import { Error } from './interfaces'

export const createError = (status: number, message: string): Error => {
  const err: Error = new Error()
  err.status = status
  err.message = message
  return err
}
