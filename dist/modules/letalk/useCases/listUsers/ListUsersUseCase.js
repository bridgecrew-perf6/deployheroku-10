"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListUsersUseCase = /** @class */ (function () {
    function ListUsersUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ListUsersUseCase.prototype.execute = function () {
        var users = this.usersRepository.list();
        return users;
    };
    return ListUsersUseCase;
}());
exports.ListUsersUseCase = ListUsersUseCase;
