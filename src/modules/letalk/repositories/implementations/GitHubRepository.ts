import { Repo } from "../../model/Repo";
var shuffle = require("shuffle-array");

const axios = require("axios");
class GitHubRepository implements GitHubRepository {
  private static INSTANCE: GitHubRepository;

  constructor() {}

  public static getInstance(): GitHubRepository {
    if (!GitHubRepository.INSTANCE) {
      GitHubRepository.INSTANCE = new GitHubRepository();
    }
    return GitHubRepository.INSTANCE;
  }

  async list(): Promise<Repo[]> {
    const resp = await axios.get("https://api.github.com/orgs/takenet/repos");

    let listRepo: Repo[] = resp.data;

    return listRepo;
  }
}

export { GitHubRepository };
