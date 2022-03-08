import { User } from "../model/User";
import { IItemProjecao } from "../useCases/simulate/SimulateUseCase";

interface IUserRepositoryDTO {
  cpf: string;
  uf: string;
  nascimento: string;
  vlEmprestimo: number;
  vlAPagarMes: number;
  projecao: IItemProjecao[];
}

interface IUserRepository {
  create({
    cpf,
    uf,
    nascimento,
    vlEmprestimo,
    vlAPagarMes,
    projecao,
  }: IUserRepositoryDTO): void;
  findByCPF(cpf: string): User;
  list(): User[];
}

export { IUserRepository, IUserRepositoryDTO };
