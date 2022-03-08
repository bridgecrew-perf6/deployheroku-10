"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimulateController = /** @class */ (function () {
    function SimulateController(simulateUseCase) {
        this.simulateUseCase = simulateUseCase;
    }
    SimulateController.prototype.handle = function (request, response) {
        // const { cpf, uf, nascimento, vlEmprestimo, vlAPagarMes } = request.query;
        // const cpf = request.query.cpf.toString();
        var uf = request.query.uf.toString();
        // const nascimento = request.query.nascimento.toString();
        var vlEmprestimo = parseFloat(request.query.vlEmprestimo.toString());
        var vlAPagarMes = parseFloat(request.query.vlAPagarMes.toString());
        try {
            var simulateReturn = this.simulateUseCase.execute({
                uf: uf,
                vlEmprestimo: vlEmprestimo,
                vlAPagarMes: vlAPagarMes,
            });
            return response.json(simulateReturn);
        }
        catch (err) {
            return response.status(400).json({ message: err.message });
        }
    };
    return SimulateController;
}());
exports.SimulateController = SimulateController;
