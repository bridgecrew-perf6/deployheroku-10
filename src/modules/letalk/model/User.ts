import { v4 as uuidV4 } from "uuid";
import { IItemProjecao } from "../useCases/simulate/SimulateUseCase";

class User {
  id?: string;
  cpf: string;
  uf: string;
  nascimento: string;
  vlEmprestimo: number;
  vlAPagarMes: number;
  created_at: Date;
  projecao: IItemProjecao[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
