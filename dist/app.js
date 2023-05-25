'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const autoload_1 = require("@fastify/autoload");
const app = async function (fastify, opts) {
    fastify.register(autoload_1.default, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    });
    fastify.register(autoload_1.default, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    });
};
exports.default = app;
//# sourceMappingURL=app.js.map