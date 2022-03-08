import { Router } from "express";
import { createUserController } from "../modules/letalk/useCases/createUser";
import { listUserController } from "../modules/letalk/useCases/listUsers";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

userRoutes.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

export { userRoutes };
