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

    abrirModal() {
        let modalIndexInput = document.getElementById("contato-index");
        let modalNomeInput = document.getElementById("contato-nome");
        let modalEmailInput = document.getElementById("contato-email");
        let modalIdadeInput = document.getElementById("contato-idade");
        let modalCidadeInput = document.getElementById("contato-cidade");

        modalIndexInput.value = this.index;
        modalNomeInput.value = this.nome;
        modalEmailInput.value = this.email;
        modalIdadeInput.value = this.idade;
        modalCidadeInput.value = this.cidade;

        let modal = document.getElementById("modal");
        modal.style.display = "block";
    }
}