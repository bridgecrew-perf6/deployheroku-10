interface IRequest {
  uf: string;
  vlEmprestimo: number;
  vlAPagarMes: number;
}

interface IItemProjecao {
  saldoDevedor: number;
  juros: number;
  saldoDevedorAjustado: number;
  valorParcela: number;
  vencimento: Date;
}

class SimulateUseCase {
  constructor() {}

  execute({ uf, vlEmprestimo, vlAPagarMes }: IRequest) {
    if (!this.verificaValorMinimo(vlEmprestimo, vlAPagarMes)) {
      throw new Error(
        "O valor mínimo da parcela paga mensalmente é de 1% do valor que o cliente deseja emprestado."
      );
    }

    return this.projecaoParcelas(
      parseFloat(vlEmprestimo.toString()),
      parseFloat(vlAPagarMes.toString()),
      uf
    );
  }

  private verificaValorMinimo(
    vlEmprestimo: number,
    vlAPagarMes: number
  ): boolean {
    if (vlAPagarMes / vlEmprestimo >= 0.01 && vlEmprestimo >= 50000) {
      return true;
    }
    return false;
  }

  private returnTxJuros(uf: "MG" | "SP" | "RJ" | "ES") {
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
  }

  private add_month(m) {
    var date = new Date();
    var month = date.getMonth();
    var n_date = new Date(date.getFullYear(), eval(m + month), 1);

    return n_date;
  }

  private projecaoParcelas(
    vlEmprestimo: number,
    vlAPagarMes: number,
    uf
  ): Object {
    const txJuros = this.returnTxJuros(uf);
    var saldoDevedor = vlEmprestimo;
    const projecaoList: IItemProjecao[] = [];
    let contDate = 1;
    let totalJuros = 0;
    while (saldoDevedor > 0) {
      projecaoList.push({
        saldoDevedor: saldoDevedor,
        juros: saldoDevedor * txJuros,
        saldoDevedorAjustado: saldoDevedor + saldoDevedor * txJuros,
        valorParcela: vlAPagarMes,
        vencimento: this.add_month(contDate),
      } as IItemProjecao);
      contDate++;
      totalJuros = totalJuros + saldoDevedor * txJuros;
      saldoDevedor = saldoDevedor + saldoDevedor * txJuros - vlAPagarMes;
    }

    const projecao = {
      valorRequerido: vlEmprestimo,
      taxaJuros: txJuros,
      valorParcela: vlAPagarMes,
      totalMesQuitar: projecaoList.length,
      totalJuros: totalJuros,
      totalPagar: totalJuros + vlEmprestimo,
      projecao: projecaoList,
    };

    return projecao;
  }
  //v  , v*j ,v +v*j, parcela, data
}

export { SimulateUseCase, IItemProjecao };
