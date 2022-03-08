import { User } from "../../model/User";
import { IUserRepositoryDTO } from "../IUserRepository";

class UserRepository implements UserRepository {
  private users: User[];

  private static INSTANCE: UserRepository;

  constructor() {
    this.users = this.readFile();
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  private readFile(): User[] {
    const fs = require("fs");
    return JSON.parse(fs.readFileSync("student.json", "utf8"));
  }

  private writeFile() {
    var json = JSON.stringify(this.users);
    var fs = require("fs");
    fs.writeFile("student.json", json, "utf8", () => {});
  }

  create({
    cpf,
    uf,
    nascimento,
    vlEmprestimo,
    vlAPagarMes,
    projecao,
  }: IUserRepositoryDTO): void {
    const user = new User();

    Object.assign(user, {
      cpf,
      uf,
      nascimento,
      vlEmprestimo,
      vlAPagarMes,
      projecao,
      created_at: new Date(),
    });

    this.users.push(user);
    this.writeFile();
  }

  findByCPF(cpf: string): User {
    const user = this.users.find((user) => user.cpf === cpf);

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UserRepository };
