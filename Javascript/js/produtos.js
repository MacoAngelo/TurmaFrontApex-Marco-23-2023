var produtosCadastrados = [];

function cadastrarProduto(nome, marca, valor, quantidadeEstoque) {
    if (!produtoExiste(nome) && valor > 0 && quantidadeEstoque > 0) {
        produtosCadastrados.push(new Produto(nome, marca, valor, quantidadeEstoque));
    }
}

function editarProduto(index, nome, marca, valor, quantidadeEstoque) {
    produtosCadastrados[index].nome = nome;
    produtosCadastrados[index].marca = marca;
    produtosCadastrados[index].valor = valor;
    produtosCadastrados[index].quantidadeEstoque = quantidadeEstoque;
}

function carregarProduto(index) {
    // Obter o nome e o valor do produto do formulário
    let idInput = document.getElementById("product-id");
    let nomeInput = document.getElementById("product-nome");
    let marcoInput = document.getElementById("product-marca");
    let valorInput = document.getElementById("product-valor");
    let quantidadeEstoqueInput = document.getElementById("product-quantidadeEstoque");

    idInput.value = index;
    nomeInput.value = produtosCadastrados[index].nome;
    marcoInput.value = produtosCadastrados[index].marca;
    valorInput.value = produtosCadastrados[index].valor;
    quantidadeEstoqueInput.value = produtosCadastrados[index].quantidadeEstoque;

    let modal = document.getElementById("add-product-modal");
    modal.style.display = "block";
}

function produtoExiste(nome) {
    let existe = false;

    for (produto of produtosCadastrados) {
        // toLowerCase() -> Deixa tudo minusculo
        if (produto.nome.toLowerCase() == nome.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function Produto(nome, marca, valor, quantidadeEstoque) {
    this.nome = nome;
    this.marca = marca;
    this.valor = valor;
    this.quantidadeEstoque = quantidadeEstoque;
}