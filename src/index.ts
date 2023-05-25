require('dotenv').config()
import { fastify as server } from 'fastify'
import app from './app'

const { ENVIRONMENT } = process.env;
if (!ENVIRONMENT) {
  throw new Error('Server could not initialize.  Check all environment variables')
}

const envToLogger = {
  dev: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid, hostname',
      },
    },
  },
  production: true,
  test: false,
}

const fastify = server({ logger: envToLogger[ENVIRONMENT] ?? true })

fastify.register(app)

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

