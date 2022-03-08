import { Router } from "express";
import { simulateController } from "../modules/letalk/useCases/simulate";

const simulateRoutes = Router();

simulateRoutes.get("/", (request, response) => {
  return simulateController.handle(request, response);
});

export { simulateRoutes };
