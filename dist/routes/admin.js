"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function adminRoutes(fastify) {
    fastify.get('/ping', async function (request, reply) {
        return { msg: 'pong' };
    });
    fastify.get('/pong', async function (request, reply) {
        return { msg: 'paching' };
    });
}
exports.default = adminRoutes;
//# sourceMappingURL=admin.js.map