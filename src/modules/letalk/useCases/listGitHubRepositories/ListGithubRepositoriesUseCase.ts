import { Repo } from "../../model/Repo";
import { User } from "../../model/User";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";

class ListGithubRepositoriesUseCase {
  private githubRepository: IGitHubRepository;
  constructor(githubRepository: IGitHubRepository) {
    this.githubRepository = githubRepository;
  }

  filterCSharp(githubRepositories: Repo[]): Repo[] {
    let listRepoCSharp: Repo[] = githubRepositories.filter((item) => {
      return item.language === "C#";
    });
    return listRepoCSharp;
  }

  sortData(listRepoCSharp: Repo[]): Repo[] {
    listRepoCSharp = listRepoCSharp.sort(function (a, b) {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    });

    return listRepoCSharp;
  }

  async execute() {
    const githubRepositories = await this.githubRepository.list();
    let listRepoCSharp = this.filterCSharp(githubRepositories);
    listRepoCSharp = this.sortData(listRepoCSharp);
    listRepoCSharp = listRepoCSharp.slice(0, 5);

    return listRepoCSharp;
  }
}

export { ListGithubRepositoriesUseCase };
