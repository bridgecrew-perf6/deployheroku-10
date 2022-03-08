import { Repo } from "../model/Repo";

interface IGitHubRepositoryDTO {
  name: string;
}

interface IGitHubRepository {
  list(): Promise<Repo[]>;
}

export { IGitHubRepository, IGitHubRepositoryDTO };
