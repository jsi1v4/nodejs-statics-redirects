import path from "path";
import dotenv from "dotenv";

import { IS_TEST } from "./constants";

if (IS_TEST) {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.testing") });
} else {
  dotenv.config();
}

export interface Static {
  url: string;
  path: string;
}

export interface Url {
  from: string;
  to: string;
}

export interface Config {
  staticFiles: Static[];
  toRedirect: Url[];
}

export default (): Config => {
  const urls = process.env.NSR_URL || "";
  const files = process.env.NSR_FILE || "";

  const toRedirect = urls.split(", ").map((x) => {
    const [from, to] = x.split(":");
    return { from, to };
  });

  const staticFiles = files.split(", ").map((x) => {
    const [url, path] = x.split(":");
    return { url, path };
  });

  return {
    staticFiles,
    toRedirect,
  };
};
