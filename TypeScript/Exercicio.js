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
var Padrao = /** @class */ (function () {
    function Padrao() {
        this.nome = "Marco Antonio Angelo";
        this.idade = 24;
        this.cidade = "Blumenau";
        this.email = "marco.angelo.blu@gmail.com";
        this.telefone = "(47) 99171-0879";
    }
    return Padrao;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        var _this = _super.call(this) || this;
        _this.nota1 = 8;
        _this.nota2 = 8;
        return _this;
    }
    Aluno.prototype.listar = function () {
        alert("Aluno");
    };
    return Aluno;
}(Padrao));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        var _this = _super.call(this) || this;
        _this.materia = "Programação";
        return _this;
    }
    Professor.prototype.listar = function () {
        alert("Professor");
    };
    return Professor;
}(Padrao));
