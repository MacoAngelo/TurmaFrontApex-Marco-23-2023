document.write('<h1>Bem-vindo ao Javascrip (arquivo importado) !!!</h1>')
let alunos = [
    ['Lucas', 24, 'Blumenau', 1.85],
    ['Eduardo', 22, 'Blumenau']
]

let lucas = {
    nome: "Lucas",
    idade: 24,
    naturalDe: 'Blumenau',
    moraEm: 'Blumenau',
    altura: 1.85,
}

let alunosNovo = [
    {
        nome: "Lucas",
        idade: 24,
        naturalDe: 'Blumenau',
        moraEm: 'Blumenau',
        altura: 1.85,
    }
]


let alunosComObjeto = [
    new Aluno('Lucas', 24, 'Blumenau', 'Blumenau', 1.85),
]

function Aluno(nome, idade, naturalDe, moraEm, altura){
    this.nome = nome;
    this.idade = idade;
    this.naturalDe = naturalDe;
    this.moraEm = moraEm;
    this.altura = altura;
}

// document.write('<h2>Soma 1: ' + soma(1, 3) + '<h2>');
// document.write('<h2>Soma 2: ' + soma('1', 3) + '<h2>');

// function soma(a, b) {
//     return a + b;
// }

// function imprimeValores () {
//     var qtdLinhasImpressas = 0;
//     for (let i = 0; i < 5; i++) {
//         document.write(i + '<br>');
//         qtdLinhasImpressas++;
//     }

//     return qtdLinhasImpressas;
// }

// function mostraQtdValoresImpressos(qtdLinhas) {
//     alert('Foram impressas ' + qtdLinhas + ' linhas!');
// }