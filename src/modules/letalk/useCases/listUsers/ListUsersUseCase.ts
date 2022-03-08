import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUsersUseCase {
  private usersRepository: IUserRepository;
  constructor(usersRepository: IUserRepository) {
    this.usersRepository = usersRepository;
  }

  execute(): User[] {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
