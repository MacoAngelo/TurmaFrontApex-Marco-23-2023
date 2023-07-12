var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class -> Classe (Palavra reservada utilizada para cria-la)
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // =-=-=-=-=-=-=-=-=-=-=-=-=
    // Métodos da classe
    Carro.prototype.exibirDados = function () {
        var mensagem = "Os dados do veículo são: ";
        mensagem += "\n\tFabricante: ".concat(this.fabricante);
        mensagem += "\n\tModelo: ".concat(this.modelo);
        mensagem += "\n\tCor: ".concat(this.cor);
        mensagem += "\n\tAno: ".concat(this.ano);
        mensagem += "\n\tTeto Solar: ".concat(this.tetoSolar);
        alert(mensagem);
    };
    return Carro;
}(Veiculo));
