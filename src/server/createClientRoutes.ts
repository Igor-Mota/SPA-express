import { readdir, writeFile } from "fs";
import { promisify } from "util";
import { resolve } from "path";

const readDirAsync = promisify(readdir);
const writeFileAsync = promisify(writeFile);

export const createClientRoutes = async () => {
  const files = await readDirAsync(resolve("src", "views"));
  const routes = files.map((file) => {
    return {
      path: "/" + file.replace(".html", ""),
      view: file.replace(".html", ""),
    };
  });
  writeFileAsync(
    resolve("src", "routes.json"),
    JSON.stringify([...routes, { path: "/", view: "home" }])
  );
};
