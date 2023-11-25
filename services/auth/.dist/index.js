"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handling_1 = require("@monorepo/error-handling");
const logger_1 = require("@monorepo/logger");
const server_1 = require("./src/server");
async function start() {
    return Promise.all([(0, server_1.startWebServer)()]);
}
start()
    .then((startResponses) => {
    logger_1.logger.info(`The app has started successfully ${startResponses}}`);
})
    .catch((error) => {
    error_handling_1.errorHandler.handleError(new error_handling_1.AppError("startup-failure", error.message, 500, false, error));
});
