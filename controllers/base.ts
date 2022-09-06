import { PrismaClient } from '@prisma/client'
import { NextFunction, Response, Request } from 'express'

const prisma = new PrismaClient()
