import express, { Request, Response } from "express";
import { resolve } from "path";
import webpackdevmiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import { createClientRoutes } from "./createClientRoutes";
import { routes } from "./routes/auth";
const config = require("../../webpack.config");

const app = express();
const compiler = webpack(config);
app.use(webpackdevmiddleware(compiler, {}));
createClientRoutes();

app.use("/api", routes);

app.get("*", async (req: Request, res: Response) => {
  res.sendFile(resolve("src", "index.html"));
});

app.listen(3000, function () {
  console.log("App rodando na porta 3000!");
});
