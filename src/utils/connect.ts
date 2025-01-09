import config from "config";
import mongoose from "mongoose";
import logger from "./logger";
function connect() {
  const dbUrl = config.get<string>("dbUri");

  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      logger.error("CouldnotConnect to db");
      process.exit(1);
    });
}
export default connect;
