"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimulateUseCase = /** @class */ (function () {
    function SimulateUseCase() {
    }
    SimulateUseCase.prototype.execute = function (_a) {
        var uf = _a.uf, vlEmprestimo = _a.vlEmprestimo, vlAPagarMes = _a.vlAPagarMes;
        if (!this.verificaValorMinimo(vlEmprestimo, vlAPagarMes)) {
            throw new Error("O valor mínimo da parcela paga mensalmente é de 1% do valor que o cliente deseja emprestado.");
        }
        return this.projecaoParcelas(parseFloat(vlEmprestimo.toString()), parseFloat(vlAPagarMes.toString()), uf);
    };
    SimulateUseCase.prototype.verificaValorMinimo = function (vlEmprestimo, vlAPagarMes) {
        if (vlAPagarMes / vlEmprestimo >= 0.01 && vlEmprestimo >= 50000) {
            return true;
        }
        return false;
    };
    SimulateUseCase.prototype.returnTxJuros = function (uf) {
        switch (uf) {
            case "MG":
                return 0.01;
            case "SP":
                return 0.008;
            case "RJ":
                return 0.009;
            case "ES":
                return 0.0111;
            default:
                throw new Error("Estado inválido");
        }
    };
    SimulateUseCase.prototype.add_month = function (m) {
        var date = new Date();
        var month = date.getMonth();
        var n_date = new Date(date.getFullYear(), eval(m + month), 1);
        return n_date;
    };
    SimulateUseCase.prototype.projecaoParcelas = function (vlEmprestimo, vlAPagarMes, uf) {
        var txJuros = this.returnTxJuros(uf);
        var saldoDevedor = vlEmprestimo;
        var projecaoList = [];
        var contDate = 1;
        var totalJuros = 0;
        while (saldoDevedor > 0) {
            projecaoList.push({
                saldoDevedor: saldoDevedor,
                juros: saldoDevedor * txJuros,
                saldoDevedorAjustado: saldoDevedor + saldoDevedor * txJuros,
                valorParcela: vlAPagarMes,
                vencimento: this.add_month(contDate),
            });
            contDate++;
            totalJuros = totalJuros + saldoDevedor * txJuros;
            saldoDevedor = saldoDevedor + saldoDevedor * txJuros - vlAPagarMes;
        }
        var projecao = {
            valorRequerido: vlEmprestimo,
            taxaJuros: txJuros,
            valorParcela: vlAPagarMes,
            totalMesQuitar: projecaoList.length,
            totalJuros: totalJuros,
            totalPagar: totalJuros + vlEmprestimo,
            projecao: projecaoList,
        };
        return projecao;
    };
    return SimulateUseCase;
}());
exports.SimulateUseCase = SimulateUseCase;
