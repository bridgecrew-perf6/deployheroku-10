import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  private listUserUseCase: ListUsersUseCase;
  constructor(listUserUseCase: ListUsersUseCase) {
    this.listUserUseCase = listUserUseCase;
  }
  handle(_: Request, response: Response): Response {
    const allUsers = this.listUserUseCase.execute();

    return response.json(allUsers);
  }
}

export { ListUsersController };
