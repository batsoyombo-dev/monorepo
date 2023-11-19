import { AppError, errorHandler } from "@monorepo/error-handling";
import { logger } from "@monorepo/logger";
import { startWebServer } from "./src/server";

async function start() {
    // 🦉 Array of entry point is being used to support more entry-points kinds like message queue, scheduled job,
    return Promise.all([startWebServer()]);
}

start()
    .then((startResponses) => {
        logger.info(`The app has started successfully ${startResponses}}`);
    })
    .catch((error) => {
        // ️️️✅ Best Practice: A failure during startup is catastrophic and should lead to process exit (you may retry before)
        // Consequently, we flag the error as catastrophic
        errorHandler.handleError(
            new AppError("startup-failure", error.message, 500, false, error)
        );
    });
