// Importando módulo do express
const express = require("express");

// Criando constante para manipulação
const app = express();

// Rotas
app.get("/", function(request, response) {
    // Redirecionamento
    response.send("Página Inicial");
});

app.get("/sobre", function(request, response) {
    // Redirecionamento
    response.send("Página Sobre");
});

app.get("/contato/", function(request, response) {
    // Redirecionamento
    response.send("Página Contato");
});

app.get("/apresentacao/:nome", function(request, response) {
    response.send("Olá " + request.params.nome);
});

app.listen(8081, function() {
    console.log("Servidor rodando na porta :8081!");
});