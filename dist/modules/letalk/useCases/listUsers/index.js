"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository_1 = require("../../repositories/implementations/UserRepository");
var ListUsersController_1 = require("./ListUsersController");
var ListUsersUseCase_1 = require("./ListUsersUseCase");
var userRepository = UserRepository_1.UserRepository.getInstance();
var listUserUseCase = new ListUsersUseCase_1.ListUsersUseCase(userRepository);
var listUserController = new ListUsersController_1.ListUsersController(listUserUseCase);
exports.listUserController = listUserController;
