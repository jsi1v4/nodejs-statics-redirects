import { createLogger, format, transports } from "winston";

import { IS_DEV, IS_TEST } from "./constants";

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
});

if (IS_DEV || IS_TEST) {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
} else {
  logger.add(new transports.File({ filename: "errors.log", level: "error" }));
  logger.add(new transports.File({ filename: "infos.log", level: "info" }));
}

export default logger;
