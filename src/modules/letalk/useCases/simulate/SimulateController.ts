import { Request, Response } from "express";

import { SimulateUseCase } from "./SimulateUseCase";

class SimulateController {
  private simulateUseCase: SimulateUseCase;
  constructor(simulateUseCase: SimulateUseCase) {
    this.simulateUseCase = simulateUseCase;
  }
  handle(request: Request, response: Response): Response {
    // const { cpf, uf, nascimento, vlEmprestimo, vlAPagarMes } = request.query;

    // const cpf = request.query.cpf.toString();
    const uf = request.query.uf.toString();
    // const nascimento = request.query.nascimento.toString();
    const vlEmprestimo = parseFloat(request.query.vlEmprestimo.toString());
    const vlAPagarMes = parseFloat(request.query.vlAPagarMes.toString());

    try {
      const simulateReturn = this.simulateUseCase.execute({
        uf: uf,
        vlEmprestimo: vlEmprestimo,
        vlAPagarMes: vlAPagarMes,
      });
      return response.json(simulateReturn);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { SimulateController };
