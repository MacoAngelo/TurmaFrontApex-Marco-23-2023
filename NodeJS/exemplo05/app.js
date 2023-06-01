const express = require("express");
const path = require('path')
const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get("/", function(request, response) {
    // Acessar o diretório raiz onde o arquivo app.js está.
    response.sendFile(__dirname + "/pages/index.html");
});

app.get("/sobre", function(request, response) {
    // Acessar o diretório raiz onde o arquivo app.js está.
    response.sendFile(__dirname + "/pages/sobre.html");
});

app.get("/contato/:nome", function(request, response) {
    // Acessar o diretório raiz onde o arquivo app.js está.
    response.sendFile(__dirname + "/pages/contato.html");
});

app.listen(8081, function() {
    console.log("Servidor rodando na porta :8081!");
})