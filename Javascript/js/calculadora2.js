/*
Como utilizar:

Cria o obejeto:
let calculadora = new Calculadora([1, 2], "Div")

Usa o objeto:
calculadora.calcular()
*/

let calculadora = new Calculadora([1, 2], "Div");
let resultado = calculadora.calcular();
document.write("<h1>O calculo resultou em " + resultado.valor + "</h1>")


function Calculadora(valores, operacao) {
    this.valores = valores;
    this.operacao = operacao;

    this.calcular = () => {
        let resultado = undefined;

        for (let i = 0; i < this.valores.length; i++) {
            if (resultado == undefined) {
                resultado = this.valores[i];
                continue;
            }

            if (this.operacao == 'Soma') {
                resultado += this.valores[i];
            } else if (this.operacao == 'Sub') {
                resultado -= this.valores[i];
            } else if (this.operacao == 'Mult') {
                resultado *= this.valores[i];
            } else if (this.operacao == 'Div') {
                resultado /= this.valores[i];
            } else {
                resultado = undefined;
            }
        }

        if (resultado == undefined) {
            this.operacao += ' (OPERADOR INVÁLIDO!)'
        }

        return new Resultado(resultado, this.operacao);
    }
}

function Resultado(resultado, operacao) {
    this.valor = resultado;
    this.operador = operacao;
}

function ehVerde(cor) {
    alert(cor == 'verde' ? 'Sim' : (cor == 'azul' ? 'É azul caramba!' : 'Não'));
}

function informaClasseCor(cor) {
    switch (cor) {
        case "roxo":
        case "Laranja":
        case "verde":
            alert('Essa cor é secundária!');
            break;
        case "azul":
        case "Amarelo":
        case "vermelho":
            alert('Essa cor é primaria!');
            break;
    }
}

function usandoWhile() {
    let count = 20;
    while(count > 0) {
        alert('Ainda faltam ' + count + ' clickadas!');
        count--;
    }
}

function usandoFor() {
    for (let i = 0; i < 20; i++) {
        console.log(i);
    }
}

function usandoForIn() {
    let carro = {
        placa: "THML-0021",
        chassi: "LLKJSKLJSLKJSDKJLDSKJLDFSKLJ",
        modelo: "Corsa"
    };

    for (let atributo in carro) {
        console.log('O atributo ' + atributo + 'do objeto carro, tem o valor ' + carro[atributo]);
    }
}

function usandoForOf() {
    let alunos = [ 'Lucas', 'Miriã', 'Gerfesson', 'Eduardo', 'Jeorge'];
    for (let aluno of alunos) {
alert(aluno)
    }
}

let produto = new Produto('Marco', '26/08/1998');
let produto2 = contruirProduto('Marco', '26/08/1998');

function Produto(nome, dataNascimento) {
    this.nome = nome;
    this.idade = calcularIdade(dataNascimento)
}

function contruirProduto(nome, dataNascimento) {
    let objeto = {}; // isso é igual ao this

    objeto.nome = nome;
    objeto.idade = calcularIdade(dataNascimento);

    return objeto;
}