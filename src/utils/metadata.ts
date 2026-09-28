import pkg from "../../package.json" with { type: "json" };

export default {
  owner: "ahmedrangel",
  title: pkg.name,
  version: pkg.version,
  description: pkg.description
};