import { Router } from "express";
import { Logger } from "winston";
import path from "path";

import { STATICS } from "./constants";
import { Config } from "./config";

export default (router: Router, logger: Logger, config: Config) =>
  router.get(["/", "/:param"], (req, res) => {
    const url = req.hostname + (req.params.param ? `/${req.params.param}` : "");

    const toRedirect = config.toRedirect.filter((x) => x.from === url)[0];
    if (toRedirect) {
      logger.info(`[${url}] redirect to ${toRedirect.to}`);
      return res.status(302).redirect(`${req.protocol}://${toRedirect.to}`);
    }

    const staticFile = config.staticFiles.filter((x) => x.url === url)[0];
    if (staticFile) {
      logger.info(`[${url}] use static file from ${staticFile.path}`);
      return res.sendFile(path.resolve(STATICS, staticFile.path, "index.html"));
    }

    logger.error(`[${url}] error on load config`);
    return res
      .status(400)
      .json({ message: "Invalid config, no parameters found." });
  });
