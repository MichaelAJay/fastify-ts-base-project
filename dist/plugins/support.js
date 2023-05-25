"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
module.exports = (0, fastify_plugin_1.default)(async function (fastify, opts) {
    fastify.decorate('someSupport', function () {
        return 'hugs';
    });
});
//# sourceMappingURL=support.js.map