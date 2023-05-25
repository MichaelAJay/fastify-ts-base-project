"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
module.exports = (0, fastify_plugin_1.default)(async function (fastify, opts) {
    fastify.register(require('@fastify/sensible'), {
        errorHandler: false
    });
});
//# sourceMappingURL=sensible.js.map