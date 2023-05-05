class Carro{
    constructor(modelo) {
        this.modelo = modelo;
    }

    andar() {
        alert('O carro andou!!!')
    }
}

var contatosCadastrados = [];
class Contato {
    constructor(nome, email, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.cidade = cidade;
    }

    // add() {
    //     contatosCadastrados.push(this);
    // }
}