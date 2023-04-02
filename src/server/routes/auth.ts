import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/auth", (req: Request, res: Response) => {
  res.json({ status: "you are authenticated" });
});

export { routes };
