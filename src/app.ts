import express from "express";
import helmet from "helmet";

import { STATICS } from "./constants";
import getConfig from "./config";
import logger from "./logger";
import handle from "./handle";

const app = express();
const config = getConfig();
const router = express.Router();

app
  .enable("trust proxy")
  .use(helmet.frameguard({ action: "sameorigin" }))
  .use(helmet.xssFilter())

  .use("/statics", express.static(STATICS))

  .use(handle(router, logger, config));

export default app;
