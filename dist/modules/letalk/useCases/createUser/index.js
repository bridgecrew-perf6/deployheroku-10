"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository_1 = require("../../repositories/implementations/UserRepository");
var CreateUserController_1 = require("./CreateUserController");
var CreateUserUseCase_1 = require("./CreateUserUseCase");
var userRepository = UserRepository_1.UserRepository.getInstance();
var userUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepository);
var createUserController = new CreateUserController_1.CreateUserController(userUseCase);
exports.createUserController = createUserController;
