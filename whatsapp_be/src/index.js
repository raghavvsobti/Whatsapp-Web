import dotenv from "dotenv";
import app from "./app.js";
import logger from "./configs/logger.config.js";

// dotenv configuration
dotenv.config();

const PORT = process.env.PORT || 8000;

let server = app.listen(PORT, () => {
  logger.info(`server is listening on port.. ${PORT}`);
});

const exitHandler = () => {
  if (server) {
    logger.info(`Server Closed.`);
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

//SIGTERM
process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server closed.");
    process.exit(1);
  }
});
