var contatosCadastrados = [];

class Contato {
    constructor(nome, email, idade, cidade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.cidade = cidade;
    }

    add() {
        contatosCadastrados.push(this);
    }

    update() {
        contatosCadastrados[this.index] = this;
    }

    load(index) {
        this.index = index;
        this.nome = contatosCadastrados[index].nome;
        this.email = contatosCadastrados[index].email;
        this.idade = contatosCadastrados[index].idade;
        this.cidade = contatosCadastrados[index].cidade;
    }
}