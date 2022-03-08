import { Request, Response } from "express";

import { ListGithubRepositoriesUseCase } from "./ListGithubRepositoriesUseCase";

class ListGithubController {
  private listGitHubUseCase: ListGithubRepositoriesUseCase;
  constructor(listGitHubUseCase: ListGithubRepositoriesUseCase) {
    this.listGitHubUseCase = listGitHubUseCase;
  }
  async handle(_: Request, response: Response) {
    const allRepositories = await this.listGitHubUseCase.execute();

    return response.json(allRepositories);
  }
}

export { ListGithubController };
