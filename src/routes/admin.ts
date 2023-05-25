import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function adminRoutes(fastify: FastifyInstance) {
    fastify.register(async function (adminFastify) {
        adminFastify.get('/ping', async function (request: FastifyRequest, reply: FastifyReply) {
            return { msg: 'pong' }
        })
    }, { prefix: 'admin', })
}