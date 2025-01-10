import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import { createUserSchema } from "./schema/user.schema";
import validate from "./middlewares/validateResource"
function routes(app: Express) {
  app.post("/api/users",validate(createUserSchema) createUserHandler);
}

export default routes;
