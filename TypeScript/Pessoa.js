var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.exibirDados();
    }
    Pessoa.prototype.exibirDados = function () {
        var mensagem = "Os dados da pessoa são: ";
        mensagem += "\n\tNome: ".concat(this.nome);
        mensagem += "\n\tIdade: ".concat(this.idade);
        mensagem += "\n\tCidade: ".concat(this.cidade);
        mensagem += "\n\tStatus: ".concat(this.verificarIdade());
        alert(mensagem);
    };
    Pessoa.prototype.verificarIdade = function () {
        if (this.idade < 18) {
            return "Menor de idade";
        }
        else {
            return "Maior de idade";
        }
    };
    return Pessoa;
}());
