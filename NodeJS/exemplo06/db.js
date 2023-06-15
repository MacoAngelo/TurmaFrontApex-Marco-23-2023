// Banco
const sequelizeFrame = require('sequelize');

/*
1 - Nome da base de dados
2 - Usuário da base de dados
3 - Senha da base de dados
4 - Escopo do servidor (host, tipo)
 */
const sequelizeConnection = new sequelizeFrame('crud', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    sequelizeFrame: sequelizeFrame,
    sequelizeConnection: sequelizeConnection,
}