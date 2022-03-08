"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListUsersController = /** @class */ (function () {
    function ListUsersController(listUserUseCase) {
        this.listUserUseCase = listUserUseCase;
    }
    ListUsersController.prototype.handle = function (_, response) {
        var allUsers = this.listUserUseCase.execute();
        return response.json(allUsers);
    };
    return ListUsersController;
}());
exports.ListUsersController = ListUsersController;
