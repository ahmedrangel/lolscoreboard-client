import resedit from "resedit-cli";
import pkg from "../package.json" with { type: "json" };

const owner = "ahmedrangel";
const path = "./pkg/riftboard-client.exe";
const iconPath = "./src/assets/favicon.ico";
const version = pkg.version;

const lang = 1033; // en-US

await resedit({
  in: path,
  out: path,
  definition: {
    lang,
    icons: [{ id: 1, sourceFile: iconPath }],
    version: {
      productName: `${owner} | ${pkg.name}`,
      fileDescription: pkg.name,
      fileVersion: `${version}.0`,
      productVersion: version,
      companyName: owner,
      legalCopyright: `© ${new Date().getFullYear()} ${owner}`
    }
  }
});