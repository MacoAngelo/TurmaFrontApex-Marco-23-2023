let addButton = document.getElementById("add-product-button");
let closeButton = document.querySelector("#add-product-modal .close-button");
let modal = document.getElementById("add-product-modal");
let form = document.getElementById("add-product-form");

// Adicione um evento de clique no botão para abrir o modal
addButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Adicione um evento de clique no botão de fechar para fechar o modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Adicione um evento de submit no formulário para adicionar um novo produto
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impedir que a página seja recarregada ao enviar o formulário

    // Obter o nome e o valor do produto do formulário
    let idInput = document.getElementById("product-id");
    let nomeInput = document.getElementById("product-nome");
    let marcaInput = document.getElementById("product-marca");
    let valorInput = document.getElementById("product-valor");
    let quantidadeEstoqueInput = document.getElementById("product-quantidadeEstoque");

    let id = idInput.value
    let nome = nomeInput.value;
    let marca = marcaInput.value;
    let valor = Number(valorInput.value);
    let quantidadeEstoque = Number(quantidadeEstoqueInput.value);

    if (id == "") {
        // Adicionar o produto à lista
        cadastrarProduto(nome, marca, valor, quantidadeEstoque);
    } else {
        // Altera o produto da lista
        editarProduto(id, nome, marca, valor, quantidadeEstoque)
    }

    // Atualizar a tabela de produtos
    updateTable();

    // Fechar o modal
    modal.style.display = "none";

    // Limpar o formulário
    idInput = "";
    form.reset();
});