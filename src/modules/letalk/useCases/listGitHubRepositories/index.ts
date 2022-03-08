import { GitHubRepository } from "../../repositories/implementations/GitHubRepository";
import { ListGithubController } from "./ListGithubController";
import { ListGithubRepositoriesUseCase } from "./ListGithubRepositoriesUseCase";

const gitHubRepository = GitHubRepository.getInstance();
const listGitHubUseCase = new ListGithubRepositoriesUseCase(gitHubRepository);
const listGitHubController = new ListGithubController(listGitHubUseCase);

export { listGitHubController };
