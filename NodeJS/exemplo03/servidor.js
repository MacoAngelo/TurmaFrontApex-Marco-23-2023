// Importar módulo HTTP
var http = require("http")

// Criando um servidor na porta 8081
// http.createServer(function(req, res) {
//     res.end("NodeJS na Apex!");
// }).listen(8081);

http.createServer().listen(8081);

// Exibindo uma mensagem!
console.log("Servidor pronto para utilização!");