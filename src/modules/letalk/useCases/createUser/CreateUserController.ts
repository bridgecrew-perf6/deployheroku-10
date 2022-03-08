import { Request, Response } from "express";
import { IItemProjecao, SimulateUseCase } from "../simulate/SimulateUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;
  private simulateUseCase = new SimulateUseCase();
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { cpf, uf, nascimento, vlEmprestimo, vlAPagarMes } = request.body;
    let projecao = this.simulateUseCase.execute({
      uf,
      vlEmprestimo,
      vlAPagarMes,
    });

    this.createUserUseCase.execute({
      cpf,
      uf,
      nascimento,
      vlEmprestimo,
      vlAPagarMes,
      projecao,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
