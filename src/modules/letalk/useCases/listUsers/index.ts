import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const userRepository = UserRepository.getInstance();
const listUserUseCase = new ListUsersUseCase(userRepository);
const listUserController = new ListUsersController(listUserUseCase);

export { listUserController };
