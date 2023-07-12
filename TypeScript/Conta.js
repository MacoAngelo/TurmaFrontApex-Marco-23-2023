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
var Conta = /** @class */ (function () {
    function Conta() {
        this.agencia = "Banco 09";
        this.contaCorrente = "CONTA_001";
    }
    return Conta;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica() {
        var _this = _super.call(this) || this;
        _this.NomeCliente = "Marco";
        _this.cpf = "093.805.564-77";
        return _this;
    }
    PessoaFisica.prototype.exibirDados = function () {
        var dados = "Agencia: ".concat(this.agencia);
        dados += "Conta: ".concat(this.contaCorrente);
        dados += "Nome do cliente: ".concat(this.NomeCliente);
        dados += "CPF: ".concat(this.cpf);
        alert(dados);
    };
    return PessoaFisica;
}(Conta));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica() {
        var _this = _super.call(this) || this;
        _this.nomeEmpresa = "Apex";
        _this.cnpj = "45.678/0001";
        return _this;
    }
    PessoaJuridica.prototype.exibirDados = function () {
        var dados = "Agencia: ".concat(this.agencia);
        dados += "Conta: ".concat(this.contaCorrente);
        dados += "Nome da empresa: ".concat(this.nomeEmpresa);
        dados += "CNPJ: ".concat(this.cnpj);
        alert(dados);
    };
    return PessoaJuridica;
}(Conta));
