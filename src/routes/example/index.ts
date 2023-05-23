import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function adminRoutes(fastify: FastifyInstance) {
    fastify.get('/ping', async function (request: FastifyRequest, reply: FastifyReply) {
        return {msg: 'pong'}
    })

    fastify.get('/pong', async function (request: FastifyRequest, reply: FastifyReply) {
        return {msg: 'paching'}
    })
}