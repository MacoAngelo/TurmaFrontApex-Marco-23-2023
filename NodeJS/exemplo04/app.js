// Importando módulo do express
const express = require("express");

// Criando constante para manipulação
const app = express();

// Rotas
app.get("/", function (request, response) {
    // Redirecionamento
    response.send("Página Inicial");
});

app.get("/sobre", function (request, response) {
    // Redirecionamento
    response.send("Página Sobre");
});

app.get("/contato/", function (request, response) {
    // Redirecionamento
    response.send("Página Contato");
})
app.get("/apresentacao/:nome", function (request, response) {
    response.send("Olá " + request.params.nome);
});

app.get("/apresentacao/:nome/:idade", function (request, response) {
    let retorno = `Olá ${request.params.nome}, descobri que você tem ${request.params.idade} anos!`;

    response.send(retorno);
})

app.get("/soma/:valor1/:valor2", function (request, response) {
    let retorno = `Resultado: ${Number(request.params.valor1) + Number(request.params.valor2)}!`;

    response.send(retorno);
})

app.get("/cidades/:nome", function (request, response) {
    let retorno = "";
    retorno += request.params.nome + " - ";

    switch (request.params.nome) {
        case "Blumenau":
            retorno += "A cidade dos alimões!"
            break;
        case "Gaspar":
            retorno += "Não tem Shopping!"
            break;
        case "Florianópolis":
            retorno += "Cidade dos manézinhos (Lucas que falou)!"
            break;
        default:
            retorno += "[SEM DESCRIÇÃO]"
            break;
    }

    response.send(retorno);
})

app.listen(8081, function () {
    console.log("Servidor rodando na porta :8081!");
});