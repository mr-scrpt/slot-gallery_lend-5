/*const { readFileSync } = require("fs");*/
import { readFileSync } from "fs";
import * as nodePath from "path";
const srcFolder = nodePath.basename(`${nodePath.resolve()}/src`);

export const data = {
  menu: JSON.parse(readFileSync(`${srcFolder}/data/menu.json`, "utf8")),
  phone: JSON.parse(readFileSync(`${srcFolder}/data/phone.json`, "utf8")),
  social: JSON.parse(readFileSync(`${srcFolder}/data/social.json`, "utf8")),
  games: JSON.parse(readFileSync(`${srcFolder}/data/games.json`, "utf8")),
  benefits: JSON.parse(readFileSync(`${srcFolder}/data/benefits.json`, "utf8")),
};
