import "dotenv/config";
import logger from "./logger";
import env from "@helpers/env";


logger.debug(`Hello ${env("NAME")}!`);
