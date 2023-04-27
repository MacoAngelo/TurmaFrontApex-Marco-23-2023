var pessoasCadastradas = [];

function addPerson() {
    let nome = prompt("informe o nome da pessoa!");
    let idade = prompt("Informe a idade da pessoa!");

    if (nome || idade) {
        pessoasCadastradas.push(new Pessoa(nome, idade));
    }
}

function listPersons() {
    let dados = 'Lista de pessoas cadastradas \n'
    for(let pessoa of pessoasCadastradas) {
        dados += `Nome: ${pessoa.nome}. Idade: ${pessoa.idade}\n`
    }
    dados += `Quantidade cadastrada: ${pessoasCadastradas.length}\n`
    alert(dados);
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade
}