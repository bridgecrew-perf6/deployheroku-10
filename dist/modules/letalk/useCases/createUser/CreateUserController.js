"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimulateUseCase_1 = require("../simulate/SimulateUseCase");
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createUserUseCase) {
        this.simulateUseCase = new SimulateUseCase_1.SimulateUseCase();
        this.createUserUseCase = createUserUseCase;
    }
    CreateUserController.prototype.handle = function (request, response) {
        var _a = request.body, cpf = _a.cpf, uf = _a.uf, nascimento = _a.nascimento, vlEmprestimo = _a.vlEmprestimo, vlAPagarMes = _a.vlAPagarMes;
        var projecao = this.simulateUseCase.execute({
            uf: uf,
            vlEmprestimo: vlEmprestimo,
            vlAPagarMes: vlAPagarMes,
        });
        this.createUserUseCase.execute({
            cpf: cpf,
            uf: uf,
            nascimento: nascimento,
            vlEmprestimo: vlEmprestimo,
            vlAPagarMes: vlAPagarMes,
            projecao: projecao,
        });
        return response.status(201).send();
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
