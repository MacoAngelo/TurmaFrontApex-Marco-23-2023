// Incluir a conexão
const db = require("./db");

// Definições da tabela
const Post = db.sequelizeConnection.define('postagens', {
    titulo: {
        type: db.sequelizeFrame.STRING,
    },
    conteudo: {
        type: db.sequelizeFrame.TEXT,
    }
});

// Exportando módulo
module.exports = Post;

// Toda vez que executar a aplicação uma tabela será gerada
// Post.sync({force: true});