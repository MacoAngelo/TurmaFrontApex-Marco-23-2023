// class -> Classe (Palavra reservada utilizada para cria-la)
var Carro = /** @class */ (function () {
    function Carro() {
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
}());
