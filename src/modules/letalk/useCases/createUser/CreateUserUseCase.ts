import { IUserRepository } from "../../repositories/IUserRepository";
import { IItemProjecao } from "../simulate/SimulateUseCase";

interface IRequest {
  cpf: string;
  uf: string;
  nascimento: string;
  vlEmprestimo: number;
  vlAPagarMes: number;
  projecao: any;
}

class CreateUserUseCase {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  execute({
    cpf,
    uf,
    nascimento,
    vlEmprestimo,
    vlAPagarMes,
    projecao,
  }: IRequest): void {
    // const categoryAlreadyExists = this.userRepository.findByCPF(cpf);

    // if (categoryAlreadyExists) throw new Error("User already exists!");

    this.userRepository.create({
      cpf,
      uf,
      nascimento,
      vlEmprestimo,
      vlAPagarMes,
      projecao,
    });
  }
}

export { CreateUserUseCase };
