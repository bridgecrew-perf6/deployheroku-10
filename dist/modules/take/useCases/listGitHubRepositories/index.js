"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubRepository_1 = require("../../repositories/implementations/GitHubRepository");
var ListGithubController_1 = require("./ListGithubController");
var ListGithubRepositoriesUseCase_1 = require("./ListGithubRepositoriesUseCase");
var gitHubRepository = GitHubRepository_1.GitHubRepository.getInstance();
var listGitHubUseCase = new ListGithubRepositoriesUseCase_1.ListGithubRepositoriesUseCase(gitHubRepository);
var listGitHubController = new ListGithubController_1.ListGithubController(listGitHubUseCase);
exports.listGitHubController = listGitHubController;
