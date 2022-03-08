"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase(userRepository) {
        this.userRepository = userRepository;
    }
    CreateUserUseCase.prototype.execute = function (_a) {
        // const categoryAlreadyExists = this.userRepository.findByCPF(cpf);
        var cpf = _a.cpf, uf = _a.uf, nascimento = _a.nascimento, vlEmprestimo = _a.vlEmprestimo, vlAPagarMes = _a.vlAPagarMes, projecao = _a.projecao;
        // if (categoryAlreadyExists) throw new Error("User already exists!");
        this.userRepository.create({
            cpf: cpf,
            uf: uf,
            nascimento: nascimento,
            vlEmprestimo: vlEmprestimo,
            vlAPagarMes: vlAPagarMes,
            projecao: projecao,
        });
    };
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
