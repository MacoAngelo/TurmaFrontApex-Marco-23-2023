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
var Centralizacao = /** @class */ (function () {
    function Centralizacao() {
        this.animais = [];
        this.animais.push(new Leao());
        this.animais.push(new Cobra());
        this.animais.push(new Leao());
        this.animais.push(new Cobra());
        this.animais.push(new Leao());
        this.animais.push(new Cobra());
    }
    Centralizacao.prototype.colocaOsBixoPraAndar = function () {
        for (var _i = 0, _a = this.animais; _i < _a.length; _i++) {
            var bixo = _a[_i];
            bixo.locomover();
        }
    };
    return Centralizacao;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var AnimalTerrestre = /** @class */ (function (_super) {
    __extends(AnimalTerrestre, _super);
    function AnimalTerrestre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimalTerrestre.prototype.locomover = function () {
        alert("O animal ".concat(this.nome, " come\u00E7ou a andar."));
        alert("O animal ".concat(this.nome, " parou de andar."));
    };
    return AnimalTerrestre;
}(Animal));
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        var _this = _super.call(this) || this;
        _this.nome = "Leão";
        return _this;
    }
    return Leao;
}(AnimalTerrestre));
var Cobra = /** @class */ (function (_super) {
    __extends(Cobra, _super);
    function Cobra() {
        var _this = _super.call(this) || this;
        _this.nome = "Cobra";
        return _this;
    }
    Cobra.prototype.locomover = function () {
        alert("O animal ".concat(this.nome, " come\u00E7ou a rastejar."));
        alert("O animal ".concat(this.nome, " parou de rastejar."));
    };
    return Cobra;
}(AnimalTerrestre));
