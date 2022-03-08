import { Router } from "express";
import { listGitHubController } from "../modules/take/useCases/listGitHubRepositories";

const gitRoutes = Router();

gitRoutes.get("/", async (request, response) => {
  return await listGitHubController.handle(request, response);
});

export { gitRoutes };
