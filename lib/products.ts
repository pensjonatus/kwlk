import fs from "fs";
import path from "path";

const productDirectory = path.join(process.cwd(), "public/products");

export function getImagePaths() {
  const fileNames = fs
    .readdirSync(productDirectory)
    .map((fileName) => path.join(productDirectory, fileName));
  return fileNames;
}
