

function Calculadora(valores, operacao) {
    this.values = valores;
    this.operation = operacao;
    this.calcular = () => {
        let value = 0;
        for (let i = 0; i < this.values.length; i++) {
            value += this.values[i];
        }

        return new Resultado(value, this.operation);
    }
}

function Resultado(valor, operacao) {
    this.valor = valor;
    this.operacao = operacao;
}