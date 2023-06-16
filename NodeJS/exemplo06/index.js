// Constantes para subir o servidor
const express = require("express"); //importa o módulo do Express.
const app = express(); // Executa o módulo do Express, subindo um servidor.
const path = require('path')

// Utilizar Bootstrap
app.use(express.static('public'));

// join -> Serve para ligar string. Pode substituir "pasta" + "subpasta" para path.Join(pasta, subpasta) -> Feito para diretórios
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// Constantes para utilização do Handlebars e do Body-Parser
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

// Constantes para utilização das tabelas (Sequelize)
const Post = require("./Post");

// BodyParse
app.use(bodyParser.urlencoded({ extended: false })) // Ditar que as requisições vão ter URL Encode
app.use(bodyParser.json()) // Ditar que o envio de dados será em formato JSON

// Rotas
app.get("/cad", function (requisicao, resposta) {
    resposta.render("formulario",
        {
            creating: true,
        });
});

app.get("/editRecord/:id", function (requisicao, resposta) {
    Post.findOne(
        {
            where: {
                id: requisicao.params.id,
            }
        }).then((post) => {
            resposta.render("formulario",
                {
                    creating: false,
                    id: post.id,
                    titulo: post.titulo,
                    conteudo: post.conteudo
                }
            );
        });
});

app.get("/", function (requisicao, resposta) {
    Post.findAll().then(
        function (posts) {
            resposta.render("home", { posts: posts })
        }
    );

    // Todas as postgens do banco
    // let todasPostagens = Post.findAll();
    // resposta.render("home", {posts: todasPostagens});
});

app.post("/add", function (requisicao, resposta) {
    // Criar registro no banco
    Post.create(
        {
            // pega os dados da requisição e adiciona no registro a ser cadastrado.
            titulo: requisicao.body.titulo,
            conteudo: requisicao.body.conteudo,
        }
    ).then(
        // Redireciona para a página inicial dps de criar o registro
        function () {
            resposta.redirect("/");
        }
    ).catch(
        // Envia a mensagem de erro caso ocorra algum ao criar o registro
        function (erro) {
            resposta.send("Falha ao cadastrar nova postagem. Erro: " + erro)
        }
    );
});

app.post("/update/:id", function (requisicao, resposta) {
    Post.update(
        { titulo: requisicao.body.titulo, conteudo: requisicao.body.conteudo },
        { where: { id: requisicao.params.id } }
    ).then(function () {
        resposta.redirect("/")
    }).catch(function (erro) {
        resposta.send("Falha ao alterar a postagem. Erro:  " + erro)
    });
});

app.get("/deletar/:id", function (requisicao, resposta) {
    Post.destroy(
        {
            // Filtra a exclusão para somente registros que o id seja o passado.
            where: {
                'id': requisicao.params.id,
            }
        }
    ).then(
        function () {
            resposta.redirect("/")
        }
    ).catch(
        function (erro) {
            resposta.send("Falha ao excluir a postagem. Erro: " + erro);
        }
    );
})

// Template -> Necessário para utilizar HandleBars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Finalizar configuração do servidor
app.listen(8082, function () {
    console.log("Servidor rodando!!");
});