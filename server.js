import app from "./src/app.js";
import { connectMongo } from "./src/database/index.js";
import { logger } from "./src/utils/index.js";

const startApp = async () => {
  try {
    await connectMongo();
    app.listen(3000, () => {
      logger.info(`Server started on port  ${3000}`);
    });
  } catch (error) {
    logger.error(error.message);
  }
};

startApp();
