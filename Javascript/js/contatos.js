var contatosCadastrados = [];

function salvarRegistro() {
    console.log("Salvo")
}

function Contato(nome, email, cidade, idade) {
    this.nome = nome;
    this.email = email;
    this.cidade = cidade;
    this.idade = idade;
}