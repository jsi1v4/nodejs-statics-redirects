import path from "path";

export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_TEST = process.env.NODE_ENV === "testing";
export const DIRNAME = IS_DEV || IS_TEST ? path.resolve("src") : "";
export const STATICS = path.resolve(DIRNAME, "statics");
